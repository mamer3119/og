/**
 * Google Analytics 4 Implementation
 * Lotus Medical Career College
 * 
 * This module handles all GA4 tracking, conversion events, and enhanced ecommerce
 * Optimized for healthcare education conversion tracking with female-focused metrics
 */

// GA4 Configuration
const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with actual GA4 Measurement ID
const GTM_ID = 'GTM-XXXXXXX'; // Replace with actual GTM Container ID
const DEBUG_MODE = process.env.NODE_ENV === 'development';

/**
 * Initialize Google Analytics 4 with Enhanced Measurement
 */
export const initializeGA4 = () => {
  // Google Analytics 4 Script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  // GA4 Configuration
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  
  gtag('js', new Date());
  
  // Enhanced GA4 Configuration with custom dimensions
  gtag('config', GA4_MEASUREMENT_ID, {
    send_page_view: true,
    cookie_flags: 'SameSite=None;Secure',
    custom_map: {
      'dimension1': 'user_type',        // New vs Returning
      'dimension2': 'program_interest',  // CNA, HHA, LVN, RNA
      'dimension3': 'funding_eligible',  // WIOA eligibility
      'dimension4': 'device_category',   // Mobile/Desktop/Tablet
      'dimension5': 'traffic_source',    // Organic/Paid/Social/Direct
      'dimension6': 'user_gender',       // Female/Male/Other
      'dimension7': 'age_range',         // 18-24, 25-34, 35-44, 45+
      'dimension8': 'cohort_interest'    // Specific cohort date
    },
    enhanced_measurement: {
      scroll: true,           // Track scroll depth
      outbound_clicks: true,  // Track external links
      site_search: true,      // Track site searches
      video_engagement: true, // Track video interactions
      file_downloads: true,   // Track PDF downloads
      page_changes: true,     // Track SPA route changes
      form_interactions: true // Track form engagement
    }
  });

  // Set up Enhanced Ecommerce for enrollment tracking
  gtag('set', {
    'currency': 'USD',
    'country': 'US'
  });

  if (DEBUG_MODE) {
    console.log('🔍 GA4 Initialized:', GA4_MEASUREMENT_ID);
    gtag('event', 'debug_mode', { debug_mode: true });
  }
};

/**
 * Initialize Google Tag Manager for advanced tracking
 */
export const initializeGTM = () => {
  // GTM Script in head
  const gtmScript = document.createElement('script');
  gtmScript.innerHTML = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${GTM_ID}');
  `;
  document.head.appendChild(gtmScript);

  // GTM noscript fallback in body
  const gtmNoScript = document.createElement('noscript');
  gtmNoScript.innerHTML = `
    <iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>
  `;
  document.body.insertBefore(gtmNoScript, document.body.firstChild);

  if (DEBUG_MODE) {
    console.log('🏷️ GTM Initialized:', GTM_ID);
  }
};

/**
 * Track page views with custom parameters
 */
export const trackPageView = (pagePath, pageTitle, additionalParams = {}) => {
  if (!window.gtag) return;
  
  gtag('event', 'page_view', {
    page_path: pagePath,
    page_title: pageTitle,
    page_location: window.location.href,
    ...additionalParams
  });

  if (DEBUG_MODE) {
    console.log('📄 Page View:', pagePath, additionalParams);
  }
};

/**
 * PRIMARY CONVERSION EVENTS
 * These are the main conversion goals we're optimizing for
 */

// Track application form submissions (PRIMARY CONVERSION)
export const trackApplicationSubmit = (programType, formLocation, userData = {}) => {
  if (!window.gtag) return;
  
  const eventData = {
    event_category: 'conversion',
    event_label: programType,
    value: getProgramValue(programType),
    program_type: programType,
    form_location: formLocation,
    user_type: userData.isReturning ? 'returning' : 'new',
    submission_time: new Date().toISOString(),
    ...userData
  };

  // Primary conversion event
  gtag('event', 'submit_application', eventData);
  
  // Enhanced Ecommerce purchase event
  gtag('event', 'purchase', {
    transaction_id: `APP-${Date.now()}`,
    value: getProgramValue(programType),
    currency: 'USD',
    items: [{
      item_id: programType,
      item_name: `${programType} Program Application`,
      category: 'Healthcare Training',
      quantity: 1,
      price: getProgramValue(programType)
    }]
  });

  // Facebook Pixel integration
  if (window.fbq) {
    window.fbq('track', 'Lead', {
      value: getProgramValue(programType),
      currency: 'USD',
      content_name: programType
    });
  }

  if (DEBUG_MODE) {
    console.log('🎯 Application Submitted:', eventData);
  }
};

// Track phone calls (SECONDARY CONVERSION)
export const trackPhoneCall = (phoneNumber, clickLocation) => {
  if (!window.gtag) return;
  
  gtag('event', 'phone_call_click', {
    event_category: 'conversion',
    event_label: phoneNumber,
    click_location: clickLocation,
    value: 50 // Estimated value of phone lead
  });

  // Also track as a conversion
  gtag('event', 'conversion', {
    send_to: `${GA4_MEASUREMENT_ID}/phone_call`,
    value: 50
  });

  if (DEBUG_MODE) {
    console.log('📞 Phone Call Tracked:', phoneNumber, clickLocation);
  }
};

// Track chat interactions (SECONDARY CONVERSION)
export const trackChatStart = (chatType, pageLocation) => {
  if (!window.gtag) return;
  
  gtag('event', 'chat_start', {
    event_category: 'conversion',
    event_label: chatType,
    page_location: pageLocation,
    value: 30
  });

  if (DEBUG_MODE) {
    console.log('💬 Chat Started:', chatType);
  }
};

// Track information requests (TERTIARY CONVERSION)
export const trackInfoRequest = (requestType, programInterest) => {
  if (!window.gtag) return;
  
  gtag('event', 'info_request', {
    event_category: 'conversion',
    event_label: requestType,
    program_interest: programInterest,
    value: 20
  });

  if (DEBUG_MODE) {
    console.log('📋 Info Request:', requestType, programInterest);
  }
};

/**
 * MICRO-CONVERSION TRACKING
 * Track smaller actions that indicate user engagement
 */

// Track form field interactions
export const trackFormFieldFocus = (fieldName, formName) => {
  if (!window.gtag) return;
  
  gtag('event', 'form_field_focus', {
    event_category: 'engagement',
    field_name: fieldName,
    form_name: formName
  });
};

// Track form abandonment
export const trackFormAbandonment = (formName, lastField, percentComplete) => {
  if (!window.gtag) return;
  
  gtag('event', 'form_abandon', {
    event_category: 'engagement',
    event_label: formName,
    last_field: lastField,
    percent_complete: percentComplete
  });

  if (DEBUG_MODE) {
    console.log('🚪 Form Abandoned:', formName, `${percentComplete}% complete`);
  }
};

// Track CTA clicks
export const trackCTAClick = (ctaText, ctaLocation, ctaType = 'button') => {
  if (!window.gtag) return;
  
  gtag('event', 'cta_click', {
    event_category: 'engagement',
    event_label: ctaText,
    cta_location: ctaLocation,
    cta_type: ctaType
  });

  if (DEBUG_MODE) {
    console.log('🔘 CTA Clicked:', ctaText, ctaLocation);
  }
};

// Track video engagement
export const trackVideoEngagement = (videoTitle, action, percentWatched) => {
  if (!window.gtag) return;
  
  gtag('event', 'video_' + action, {
    event_category: 'engagement',
    event_label: videoTitle,
    percent_watched: percentWatched
  });
};

// Track scroll depth
export const trackScrollDepth = (depth) => {
  if (!window.gtag) return;
  
  gtag('event', 'scroll', {
    event_category: 'engagement',
    event_label: `${depth}%`,
    percent_scrolled: depth
  });
};

// Track program interest
export const trackProgramInterest = (programType, interactionType) => {
  if (!window.gtag) return;
  
  gtag('event', 'program_interest', {
    event_category: 'engagement',
    event_label: programType,
    interaction_type: interactionType
  });
};

// Track funding eligibility checks
export const trackFundingCheck = (eligibilityResult, programType) => {
  if (!window.gtag) return;
  
  gtag('event', 'funding_eligibility_check', {
    event_category: 'engagement',
    event_label: eligibilityResult ? 'eligible' : 'not_eligible',
    program_type: programType,
    value: eligibilityResult ? 100 : 0
  });

  if (DEBUG_MODE) {
    console.log('💰 Funding Check:', eligibilityResult ? 'Eligible' : 'Not Eligible');
  }
};

// Track testimonial interactions
export const trackTestimonialView = (testimonialName, viewDuration) => {
  if (!window.gtag) return;
  
  gtag('event', 'testimonial_view', {
    event_category: 'engagement',
    event_label: testimonialName,
    view_duration: viewDuration
  });
};

// Track FAQ interactions
export const trackFAQInteraction = (question, action) => {
  if (!window.gtag) return;
  
  gtag('event', 'faq_interaction', {
    event_category: 'engagement',
    event_label: question,
    action: action // 'expand' or 'collapse'
  });
};

/**
 * ENHANCED ECOMMERCE TRACKING
 */

// Track program views (product views)
export const trackProgramView = (programType, programPrice) => {
  if (!window.gtag) return;
  
  gtag('event', 'view_item', {
    currency: 'USD',
    value: programPrice,
    items: [{
      item_id: programType,
      item_name: `${programType} Program`,
      category: 'Healthcare Training',
      price: programPrice,
      quantity: 1
    }]
  });
};

// Track add to cart (begin application)
export const trackBeginApplication = (programType) => {
  if (!window.gtag) return;
  
  gtag('event', 'add_to_cart', {
    currency: 'USD',
    value: getProgramValue(programType),
    items: [{
      item_id: programType,
      item_name: `${programType} Program`,
      category: 'Healthcare Training',
      price: getProgramValue(programType),
      quantity: 1
    }]
  });
};

// Track checkout progress
export const trackCheckoutProgress = (step, programType) => {
  if (!window.gtag) return;
  
  gtag('event', 'begin_checkout', {
    currency: 'USD',
    value: getProgramValue(programType),
    items: [{
      item_id: programType,
      item_name: `${programType} Program`,
      category: 'Healthcare Training',
      price: getProgramValue(programType),
      quantity: 1
    }],
    checkout_step: step
  });
};

/**
 * USER PROPERTIES & SEGMENTATION
 */

// Set user properties for segmentation
export const setUserProperties = (properties) => {
  if (!window.gtag) return;
  
  gtag('set', 'user_properties', {
    user_type: properties.userType || 'prospect',
    program_interest: properties.programInterest || 'unknown',
    funding_eligible: properties.fundingEligible || 'unknown',
    preferred_schedule: properties.preferredSchedule || 'unknown',
    career_changer: properties.careerChanger || 'unknown',
    has_children: properties.hasChildren || 'unknown',
    employment_status: properties.employmentStatus || 'unknown'
  });

  if (DEBUG_MODE) {
    console.log('👤 User Properties Set:', properties);
  }
};

// Track user timing (page engagement)
export const trackUserTiming = (timingCategory, timingVariable, timingValue) => {
  if (!window.gtag) return;
  
  gtag('event', 'timing_complete', {
    name: timingVariable,
    value: timingValue,
    event_category: timingCategory
  });
};

/**
 * ERROR & PERFORMANCE TRACKING
 */

// Track form errors
export const trackFormError = (errorType, fieldName, formName) => {
  if (!window.gtag) return;
  
  gtag('event', 'form_error', {
    event_category: 'error',
    error_type: errorType,
    field_name: fieldName,
    form_name: formName
  });

  if (DEBUG_MODE) {
    console.error('❌ Form Error:', errorType, fieldName);
  }
};

// Track page load performance
export const trackPageLoadPerformance = () => {
  if (!window.gtag || !window.performance) return;
  
  const perfData = window.performance.timing;
  const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
  const domReadyTime = perfData.domContentLoadedEventEnd - perfData.navigationStart;
  
  gtag('event', 'page_load_time', {
    event_category: 'performance',
    value: pageLoadTime,
    dom_ready_time: domReadyTime,
    page_path: window.location.pathname
  });

  if (DEBUG_MODE) {
    console.log('⚡ Page Load Time:', pageLoadTime + 'ms');
  }
};

/**
 * A/B TESTING INTEGRATION
 */

// Track experiment views
export const trackExperiment = (experimentId, variantId) => {
  if (!window.gtag) return;
  
  gtag('event', 'experiment_impression', {
    experiment_id: experimentId,
    variant_id: variantId
  });

  // Set user property for segmentation
  gtag('set', 'user_properties', {
    [`exp_${experimentId}`]: variantId
  });

  if (DEBUG_MODE) {
    console.log('🧪 Experiment:', experimentId, 'Variant:', variantId);
  }
};

/**
 * UTILITY FUNCTIONS
 */

// Get program value for conversion tracking
const getProgramValue = (programType) => {
  const programValues = {
    'CNA': 2000,
    'HHA': 1500,
    'LVN': 8000,
    'RNA': 2500
  };
  return programValues[programType] || 0;
};

// Track custom events
export const trackCustomEvent = (eventName, parameters = {}) => {
  if (!window.gtag) return;
  
  gtag('event', eventName, parameters);

  if (DEBUG_MODE) {
    console.log('📊 Custom Event:', eventName, parameters);
  }
};

// Initialize all tracking on page load
export const initializeAnalytics = () => {
  // Initialize GA4 and GTM
  initializeGA4();
  initializeGTM();

  // Track initial page load performance
  window.addEventListener('load', () => {
    setTimeout(trackPageLoadPerformance, 0);
  });

  // Set up scroll depth tracking
  setupScrollDepthTracking();
  
  // Set up form abandonment tracking
  setupFormAbandonmentTracking();

  // Track print events (brochure downloads)
  window.addEventListener('beforeprint', () => {
    trackCustomEvent('print_page', {
      page_path: window.location.pathname
    });
  });

  if (DEBUG_MODE) {
    console.log('✅ Analytics fully initialized');
    window.analytics = {
      trackApplicationSubmit,
      trackPhoneCall,
      trackCTAClick,
      trackFormFieldFocus,
      trackCustomEvent
    };
  }
};

// Set up scroll depth tracking
const setupScrollDepthTracking = () => {
  let maxScroll = 0;
  const scrollThresholds = [25, 50, 75, 90, 100];
  const trackedThresholds = new Set();

  window.addEventListener('scroll', debounce(() => {
    const scrollPercent = Math.round(
      (window.scrollY + window.innerHeight) / document.body.scrollHeight * 100
    );

    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;
      
      scrollThresholds.forEach(threshold => {
        if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
          trackedThresholds.add(threshold);
          trackScrollDepth(threshold);
        }
      });
    }
  }, 500));
};

// Set up form abandonment tracking
const setupFormAbandonmentTracking = () => {
  let formStartTime = null;
  let lastFieldFocused = null;
  let formName = null;

  document.addEventListener('focusin', (e) => {
    if (e.target.matches('input, textarea, select')) {
      if (!formStartTime) {
        formStartTime = Date.now();
        formName = e.target.closest('form')?.getAttribute('name') || 'unknown';
      }
      lastFieldFocused = e.target.name || e.target.id;
      trackFormFieldFocus(lastFieldFocused, formName);
    }
  });

  window.addEventListener('beforeunload', () => {
    if (formStartTime && !document.querySelector('form[data-submitted="true"]')) {
      const timeSpent = (Date.now() - formStartTime) / 1000;
      trackFormAbandonment(formName, lastFieldFocused, timeSpent);
    }
  });
};

// Debounce utility
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default {
  initializeAnalytics,
  trackApplicationSubmit,
  trackPhoneCall,
  trackChatStart,
  trackInfoRequest,
  trackCTAClick,
  trackFormFieldFocus,
  trackFormAbandonment,
  trackProgramInterest,
  trackFundingCheck,
  trackTestimonialView,
  trackFAQInteraction,
  trackProgramView,
  trackBeginApplication,
  trackCheckoutProgress,
  trackVideoEngagement,
  trackExperiment,
  trackCustomEvent,
  setUserProperties,
  trackPageView
};