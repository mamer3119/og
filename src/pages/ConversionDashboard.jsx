import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import {
  TrendingUp, TrendingDown, Users, Target, DollarSign, 
  Activity, BarChart3, PieChart, AlertCircle, CheckCircle,
  Clock, Zap, Eye, MousePointer, Phone, MessageSquare,
  FileText, ShoppingCart, ArrowUp, ArrowDown, Minus
} from 'lucide-react';
import { getExperimentConfigs, calculateSignificance } from '@/utils/abTesting';

const ConversionDashboard = () => {
  // Simulated real-time data (in production, this would come from analytics API)
  const [metrics, setMetrics] = useState({
    overall: {
      conversionRate: 2.5,
      previousRate: 2.3,
      visitors: 10234,
      conversions: 256,
      revenue: 512000,
      avgOrderValue: 2000
    },
    funnel: {
      homepage: { visitors: 10234, dropoff: 45 },
      programPage: { visitors: 5629, dropoff: 50 },
      formStart: { visitors: 2814, dropoff: 40 },
      formComplete: { visitors: 1688, dropoff: 85 },
      enrolled: { visitors: 253, dropoff: 0 }
    },
    channels: [
      { name: 'Organic Search', visitors: 4521, conversions: 135, rate: 2.99, trend: 'up' },
      { name: 'Paid Search', visitors: 2341, conversions: 82, rate: 3.50, trend: 'up' },
      { name: 'Social Media', visitors: 1876, conversions: 28, rate: 1.49, trend: 'down' },
      { name: 'Direct', visitors: 996, conversions: 8, rate: 0.80, trend: 'neutral' },
      { name: 'Referral', visitors: 500, conversions: 3, rate: 0.60, trend: 'down' }
    ],
    experiments: [
      {
        name: 'Hero Headline Test',
        status: 'active',
        duration: '7 days',
        visitors: 3421,
        variants: {
          control: { visitors: 1710, conversions: 43, rate: 2.51 },
          variantA: { visitors: 856, conversions: 28, rate: 3.27 },
          variantB: { visitors: 855, conversions: 31, rate: 3.63 }
        },
        winner: 'variantB',
        uplift: 44.6,
        confidence: 95
      },
      {
        name: 'Form Type Test',
        status: 'active',
        duration: '5 days',
        visitors: 2100,
        variants: {
          control: { visitors: 1050, conversions: 26, rate: 2.48 },
          variantA: { visitors: 1050, conversions: 42, rate: 4.00 }
        },
        winner: 'variantA',
        uplift: 61.3,
        confidence: 98
      },
      {
        name: 'CTA Button Test',
        status: 'completed',
        duration: '14 days',
        visitors: 8932,
        variants: {
          control: { visitors: 2977, conversions: 74, rate: 2.49 },
          variantA: { visitors: 2978, conversions: 89, rate: 2.99 },
          variantB: { visitors: 2977, conversions: 95, rate: 3.19 }
        },
        winner: 'variantB',
        uplift: 28.1,
        confidence: 97
      }
    ],
    microConversions: {
      phoneClicks: { count: 342, rate: 3.34 },
      chatStarts: { count: 189, rate: 1.85 },
      brochureDownloads: { count: 567, rate: 5.54 },
      videoWatches: { count: 892, rate: 8.71 },
      faqInteractions: { count: 445, rate: 4.35 }
    },
    userBehavior: {
      avgSessionDuration: 185, // seconds
      avgPagesPerSession: 3.4,
      bounceRate: 45.2,
      mobileTraffic: 62.3,
      returningVisitors: 23.4
    }
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        overall: {
          ...prev.overall,
          visitors: prev.overall.visitors + Math.floor(Math.random() * 5),
          conversions: prev.overall.conversions + (Math.random() > 0.95 ? 1 : 0)
        }
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Calculate conversion rate improvement
  const rateImprovement = ((metrics.overall.conversionRate - metrics.overall.previousRate) / metrics.overall.previousRate * 100).toFixed(1);
  const isImprovement = rateImprovement > 0;

  // Get trend icon
  const getTrendIcon = (trend) => {
    if (trend === 'up') return <ArrowUp className="h-4 w-4 text-green-500" />;
    if (trend === 'down') return <ArrowDown className="h-4 w-4 text-red-500" />;
    return <Minus className="h-4 w-4 text-gray-400" />;
  };

  // Get status badge
  const getStatusBadge = (status) => {
    if (status === 'active') {
      return <Badge className="bg-green-100 text-green-800">Active</Badge>;
    }
    return <Badge className="bg-gray-100 text-gray-800">Completed</Badge>;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Conversion Optimization Dashboard</h1>
          <p className="text-gray-600 mt-2">Real-time performance monitoring and A/B test results</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metrics.overall.conversionRate}%</div>
                <div className="flex items-center text-xs mt-2">
                  {isImprovement ? (
                    <>
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-green-600">+{rateImprovement}% from last period</span>
                    </>
                  ) : (
                    <>
                      <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                      <span className="text-red-600">{rateImprovement}% from last period</span>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metrics.overall.visitors.toLocaleString()}</div>
                <Progress value={65} className="mt-2" />
                <p className="text-xs text-gray-500 mt-1">65% of monthly goal</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Conversions</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metrics.overall.conversions}</div>
                <div className="flex items-center text-xs mt-2">
                  <Activity className="h-4 w-4 text-blue-500 mr-1" />
                  <span className="text-gray-600">Target: 7% conversion rate</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${(metrics.overall.revenue / 1000).toFixed(0)}K</div>
                <p className="text-xs text-gray-500 mt-2">AOV: ${metrics.overall.avgOrderValue}</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* A/B Testing Results */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Active A/B Tests</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {metrics.experiments.map((experiment, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{experiment.name}</CardTitle>
                        <div className="flex items-center gap-2 mt-2">
                          {getStatusBadge(experiment.status)}
                          <span className="text-sm text-gray-500">
                            <Clock className="inline h-3 w-3 mr-1" />
                            {experiment.duration}
                          </span>
                          <span className="text-sm text-gray-500">
                            <Users className="inline h-3 w-3 mr-1" />
                            {experiment.visitors.toLocaleString()} visitors
                          </span>
                        </div>
                      </div>
                      {experiment.winner && (
                        <Badge className="bg-green-100 text-green-800">
                          <Zap className="h-3 w-3 mr-1" />
                          +{experiment.uplift}%
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {Object.entries(experiment.variants).map(([variant, data]) => (
                        <div key={variant} className="relative">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium">
                              {variant === 'control' ? 'Control' : `Variant ${variant.slice(-1)}`}
                              {experiment.winner === variant && (
                                <Badge className="ml-2 bg-green-500 text-white text-xs">Winner</Badge>
                              )}
                            </span>
                            <span className="text-sm text-gray-600">
                              {data.rate.toFixed(2)}% ({data.conversions}/{data.visitors})
                            </span>
                          </div>
                          <Progress 
                            value={(data.rate / 5) * 100} 
                            className={experiment.winner === variant ? 'bg-green-100' : ''}
                          />
                        </div>
                      ))}
                    </div>
                    {experiment.confidence && (
                      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                        <div className="flex items-center">
                          <AlertCircle className="h-4 w-4 text-blue-600 mr-2" />
                          <span className="text-sm text-blue-800">
                            {experiment.confidence}% statistical confidence
                          </span>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Conversion Funnel */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Conversion Funnel</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {Object.entries(metrics.funnel).map(([stage, data], idx) => (
                  <div key={stage}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium capitalize">
                        {stage.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-600">
                          {data.visitors.toLocaleString()} visitors
                        </span>
                        {data.dropoff > 0 && (
                          <span className="text-sm text-red-600">
                            -{data.dropoff}% dropoff
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={(data.visitors / metrics.funnel.homepage.visitors) * 100} 
                        className="h-8"
                      />
                      <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-xs text-white font-medium">
                        {((data.visitors / metrics.funnel.homepage.visitors) * 100).toFixed(1)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Channel Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Channel Performance</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {metrics.channels.map((channel, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center">
                          <span className="font-medium text-sm">{channel.name}</span>
                          {getTrendIcon(channel.trend)}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {channel.visitors.toLocaleString()} visitors
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-sm">{channel.rate.toFixed(2)}%</div>
                        <div className="text-xs text-gray-500">
                          {channel.conversions} conversions
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Micro-conversions */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Micro-Conversions</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Phone className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm font-medium">Phone Clicks</span>
                    </div>
                    <div className="text-2xl font-bold">{metrics.microConversions.phoneClicks.count}</div>
                    <div className="text-xs text-gray-600">{metrics.microConversions.phoneClicks.rate}% rate</div>
                  </div>

                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center mb-2">
                      <MessageSquare className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm font-medium">Chat Starts</span>
                    </div>
                    <div className="text-2xl font-bold">{metrics.microConversions.chatStarts.count}</div>
                    <div className="text-xs text-gray-600">{metrics.microConversions.chatStarts.rate}% rate</div>
                  </div>

                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-center mb-2">
                      <FileText className="h-4 w-4 text-purple-600 mr-2" />
                      <span className="text-sm font-medium">Downloads</span>
                    </div>
                    <div className="text-2xl font-bold">{metrics.microConversions.brochureDownloads.count}</div>
                    <div className="text-xs text-gray-600">{metrics.microConversions.brochureDownloads.rate}% rate</div>
                  </div>

                  <div className="p-3 bg-orange-50 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Eye className="h-4 w-4 text-orange-600 mr-2" />
                      <span className="text-sm font-medium">Video Views</span>
                    </div>
                    <div className="text-2xl font-bold">{metrics.microConversions.videoWatches.count}</div>
                    <div className="text-xs text-gray-600">{metrics.microConversions.videoWatches.rate}% rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* User Behavior Metrics */}
        <div>
          <h2 className="text-xl font-semibold mb-4">User Behavior</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Clock className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{Math.floor(metrics.userBehavior.avgSessionDuration / 60)}:{(metrics.userBehavior.avgSessionDuration % 60).toString().padStart(2, '0')}</div>
                  <div className="text-xs text-gray-500">Avg. Session</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <MousePointer className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{metrics.userBehavior.avgPagesPerSession}</div>
                  <div className="text-xs text-gray-500">Pages/Session</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <TrendingDown className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{metrics.userBehavior.bounceRate}%</div>
                  <div className="text-xs text-gray-500">Bounce Rate</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <BarChart3 className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{metrics.userBehavior.mobileTraffic}%</div>
                  <div className="text-xs text-gray-500">Mobile Traffic</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Users className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{metrics.userBehavior.returningVisitors}%</div>
                  <div className="text-xs text-gray-500">Returning</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Action Items */}
        <div className="mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
          <h3 className="font-semibold text-yellow-900 mb-3">🎯 Recommended Actions</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
              <span className="text-sm text-gray-700">
                <strong>Implement Form Test Winner:</strong> Progressive disclosure form showing 61% uplift
              </span>
            </li>
            <li className="flex items-start">
              <AlertCircle className="h-5 w-5 text-orange-600 mr-2 mt-0.5" />
              <span className="text-sm text-gray-700">
                <strong>Optimize Mobile Experience:</strong> 62% of traffic is mobile but converting at 40% lower rate
              </span>
            </li>
            <li className="flex items-start">
              <AlertCircle className="h-5 w-5 text-orange-600 mr-2 mt-0.5" />
              <span className="text-sm text-gray-700">
                <strong>Improve Social Media Funnel:</strong> Social traffic converting at 1.49% vs 2.5% average
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConversionDashboard;