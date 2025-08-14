/**
 * A/B Testing Framework
 * Lotus Medical Career College
 * 
 * This module handles all A/B testing logic, variant assignment, and experiment tracking
 * Optimized for female-focused healthcare education conversion optimization
 */

import { trackExperiment, trackCustomEvent } from './analytics';

// Experiment configurations
const EXPERIMENTS = {
  // Hero headline variations
  heroHeadline: {
    id: 'hero_headline_v1',
    name: 'Hero Headline Test',
    status: 'active',
    traffic: 100, // Percentage of traffic to include
    variants: {
      control: {
        weight: 50,
        content: "Start Your Healthcare Career in 31 Days"
      },
      variantA: {
        weight: 25,
        content: "Join 2,500+ Women Who Found Career Security in Healthcare"
      },
      variantB: {
        weight: 25,
        content: "Evening Classes for Working Moms - Graduate in Just 5 Weeks"
      }
    }
  },

  // CTA button text variations
  ctaButtonText: {
    id: 'cta_button_v1',
    name: 'CTA Button Text Test',
    status: 'active',
    traffic: 100,
    variants: {
      control: {
        weight: 33,
        content: "Apply Now"
      },
      variantA: {
        weight: 33,
        content: "Secure Your Spot"
      },
      variantB: {
        weight: 34,
        content: "Start Today - Limited Spots"
      }
    }
  },

  // Trust signal placement
  trustSignalPlacement: {
    id: 'trust_signals_v1',
    name: 'Trust Signal Placement Test',
    status: 'active',
    traffic: 100,
    variants: {
      control: {
        weight: 50,
        placement: 'bottom'
      },
      variantA: {
        weight: 50,
        placement: 'top'
      }
    }
  },

  // Form type test
  formType: {
    id: 'form_type_v1',
    name: 'Form Type Test',
    status: 'active',
    traffic: 100,
    variants: {
      control: {
        weight: 50,
        type: 'single-step'
      },
      variantA: {
        weight: 50,
        type: 'progressive-disclosure'
      }
    }
  },

  // Urgency messaging
  urgencyMessaging: {
    id: 'urgency_v1',
    name: 'Urgency Messaging Test',
    status: 'active',
    traffic: 100,
    variants: {
      control: {
        weight: 33,
        message: null // No urgency message
      },
      variantA: {
        weight: 33,
        message: "Only 8 spots remaining for February cohort"
      },
      variantB: {
        weight: 34,
        message: "Application deadline: January 15th"
      }
    }
  },

  // Social proof format
  socialProofFormat: {
    id: 'social_proof_v1',
    name: 'Social Proof Format Test',
    status: 'active',
    traffic: 100,
    variants: {
      control: {
        weight: 50,
        format: 'static-testimonials'
      },
      variantA: {
        weight: 50,
        format: 'real-time-notifications'
      }
    }
  },

  // Female-focused messaging
  femaleMessaging: {
    id: 'female_messaging_v1',
    name: 'Female-Focused Messaging Test',
    status: 'active',
    traffic: 100,
    variants: {
      control: {
        weight: 50,
        message: "Fast-track your healthcare career"
      },
      variantA: {
        weight: 50,
        message: "Join our supportive community of women in healthcare"
      }
    }
  },

  // Funding emphasis
  fundingEmphasis: {
    id: 'funding_emphasis_v1',
    name: 'Funding Emphasis Test',
    status: 'active',
    traffic: 100,
    variants: {
      control: {
        weight: 50,
        emphasis: 'low' // Small mention
      },
      variantA: {
        weight: 50,
        emphasis: 'high' // Prominent display
      }
    }
  }
};

// User storage keys
const STORAGE_KEY_PREFIX = 'lmcc_ab_';
const VISITOR_ID_KEY = 'lmcc_visitor_id';

/**
 * Initialize A/B testing framework
 */
export const initializeABTesting = () => {
  // Ensure visitor has a unique ID
  const visitorId = getOrCreateVisitorId();
  
  // Initialize active experiments
  Object.keys(EXPERIMENTS).forEach(experimentKey => {
    const experiment = EXPERIMENTS[experimentKey];
    if (experiment.status === 'active') {
      getVariant(experimentKey);
    }
  });

  if (process.env.NODE_ENV === 'development') {
    console.log('🧪 A/B Testing initialized for visitor:', visitorId);
    window.abTesting = {
      getVariant,
      getAllVariants,
      resetExperiment,
      getVisitorId: () => visitorId
    };
  }
};

/**
 * Get or create a unique visitor ID
 */
const getOrCreateVisitorId = () => {
  let visitorId = localStorage.getItem(VISITOR_ID_KEY);
  
  if (!visitorId) {
    visitorId = generateUUID();
    localStorage.setItem(VISITOR_ID_KEY, visitorId);
  }
  
  return visitorId;
};

/**
 * Generate a UUID for visitor identification
 */
const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

/**
 * Get variant for an experiment
 */
export const getVariant = (experimentKey) => {
  const experiment = EXPERIMENTS[experimentKey];
  
  if (!experiment || experiment.status !== 'active') {
    return null;
  }

  // Check if user is in experiment traffic allocation
  if (!isInExperimentTraffic(experiment.traffic)) {
    return null;
  }

  // Check for existing assignment
  const storageKey = STORAGE_KEY_PREFIX + experimentKey;
  let variant = localStorage.getItem(storageKey);
  
  if (!variant) {
    // Assign new variant
    variant = assignVariant(experiment);
    localStorage.setItem(storageKey, variant);
    
    // Track experiment impression
    trackExperiment(experiment.id, variant);
  }
  
  return {
    variant,
    content: experiment.variants[variant]
  };
};

/**
 * Check if user should be included in experiment traffic
 */
const isInExperimentTraffic = (trafficPercentage) => {
  const visitorId = getOrCreateVisitorId();
  const hash = simpleHash(visitorId);
  return (hash % 100) < trafficPercentage;
};

/**
 * Simple hash function for consistent assignment
 */
const simpleHash = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
};

/**
 * Assign a variant based on weights
 */
const assignVariant = (experiment) => {
  const random = Math.random() * 100;
  let accumulated = 0;
  
  for (const [variantKey, variantData] of Object.entries(experiment.variants)) {
    accumulated += variantData.weight;
    if (random < accumulated) {
      return variantKey;
    }
  }
  
  // Fallback to control
  return 'control';
};

/**
 * Get all active variants for a user
 */
export const getAllVariants = () => {
  const variants = {};
  
  Object.keys(EXPERIMENTS).forEach(experimentKey => {
    const variant = getVariant(experimentKey);
    if (variant) {
      variants[experimentKey] = variant;
    }
  });
  
  return variants;
};

/**
 * Reset an experiment (for testing)
 */
export const resetExperiment = (experimentKey) => {
  const storageKey = STORAGE_KEY_PREFIX + experimentKey;
  localStorage.removeItem(storageKey);
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`🔄 Reset experiment: ${experimentKey}`);
  }
};

/**
 * React Hook for A/B testing
 */
export const useABTest = (experimentKey) => {
  const [variant, setVariant] = React.useState(null);
  
  React.useEffect(() => {
    const experimentVariant = getVariant(experimentKey);
    setVariant(experimentVariant);
  }, [experimentKey]);
  
  return variant;
};

/**
 * Track conversion for an experiment
 */
export const trackConversion = (experimentKey, conversionType = 'primary') => {
  const variant = localStorage.getItem(STORAGE_KEY_PREFIX + experimentKey);
  
  if (variant) {
    trackCustomEvent('experiment_conversion', {
      experiment_id: EXPERIMENTS[experimentKey]?.id,
      variant_id: variant,
      conversion_type: conversionType
    });
  }
};

/**
 * Get winning variant based on conversion data
 */
export const getWinningVariant = (experimentKey, conversionData) => {
  const experiment = EXPERIMENTS[experimentKey];
  if (!experiment) return null;
  
  let bestVariant = null;
  let bestConversionRate = 0;
  
  Object.keys(experiment.variants).forEach(variantKey => {
    const data = conversionData[variantKey];
    if (data && data.conversions && data.visitors) {
      const conversionRate = data.conversions / data.visitors;
      if (conversionRate > bestConversionRate) {
        bestConversionRate = conversionRate;
        bestVariant = variantKey;
      }
    }
  });
  
  return {
    variant: bestVariant,
    conversionRate: bestConversionRate
  };
};

/**
 * Calculate statistical significance
 */
export const calculateSignificance = (controlData, variantData) => {
  // Simple z-test for proportions
  const n1 = controlData.visitors;
  const n2 = variantData.visitors;
  const p1 = controlData.conversions / n1;
  const p2 = variantData.conversions / n2;
  
  const pooledP = (controlData.conversions + variantData.conversions) / (n1 + n2);
  const se = Math.sqrt(pooledP * (1 - pooledP) * (1/n1 + 1/n2));
  
  const z = (p2 - p1) / se;
  const pValue = 2 * (1 - normalCDF(Math.abs(z)));
  
  return {
    zScore: z,
    pValue: pValue,
    isSignificant: pValue < 0.05,
    confidenceLevel: (1 - pValue) * 100
  };
};

/**
 * Normal cumulative distribution function
 */
const normalCDF = (z) => {
  const a1 =  0.254829592;
  const a2 = -0.284496736;
  const a3 =  1.421413741;
  const a4 = -1.453152027;
  const a5 =  1.061405429;
  const p  =  0.3275911;
  
  const sign = z < 0 ? -1 : 1;
  z = Math.abs(z) / Math.sqrt(2.0);
  
  const t = 1.0 / (1.0 + p * z);
  const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-z * z);
  
  return 0.5 * (1.0 + sign * y);
};

/**
 * Multi-armed bandit algorithm for dynamic allocation
 */
export const thompsonSampling = (experimentKey, conversionData) => {
  const experiment = EXPERIMENTS[experimentKey];
  if (!experiment) return null;
  
  const samples = {};
  
  Object.keys(experiment.variants).forEach(variantKey => {
    const data = conversionData[variantKey] || { conversions: 1, visitors: 2 };
    // Beta distribution sampling
    const alpha = data.conversions + 1;
    const beta = data.visitors - data.conversions + 1;
    samples[variantKey] = sampleBeta(alpha, beta);
  });
  
  // Select variant with highest sampled value
  let bestVariant = null;
  let bestSample = -1;
  
  Object.entries(samples).forEach(([variant, sample]) => {
    if (sample > bestSample) {
      bestSample = sample;
      bestVariant = variant;
    }
  });
  
  return bestVariant;
};

/**
 * Sample from Beta distribution
 */
const sampleBeta = (alpha, beta) => {
  // Approximation using gamma distribution
  const x = sampleGamma(alpha);
  const y = sampleGamma(beta);
  return x / (x + y);
};

/**
 * Sample from Gamma distribution (simplified)
 */
const sampleGamma = (shape) => {
  // Marsaglia and Tsang method (simplified)
  let sum = 0;
  for (let i = 0; i < shape; i++) {
    sum -= Math.log(Math.random());
  }
  return sum;
};

/**
 * Export experiment configurations for dashboard
 */
export const getExperimentConfigs = () => {
  return Object.entries(EXPERIMENTS).map(([key, config]) => ({
    key,
    ...config,
    currentVariants: getAllVariants()[key]
  }));
};

export default {
  initializeABTesting,
  getVariant,
  getAllVariants,
  resetExperiment,
  useABTest,
  trackConversion,
  getWinningVariant,
  calculateSignificance,
  thompsonSampling,
  getExperimentConfigs
};