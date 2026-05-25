// @ts-nocheck
/**
 * GEPI Tariff Pricing Engine for Surveying Apps
 */

const CONFIG = {
  SURVEY_TARIFFS: {
    RELOCATION_SURVEY: {
      tiers: [
        { maxArea: 0.5, baseFee: 25000 }, { maxArea: 1.0, baseFee: 30000 },
        { maxArea: 2.0, baseFee: 40000 }, { maxArea: 3.0, baseFee: 50000 },
        { maxArea: 4.0, baseFee: 60000 }, { maxArea: 5.0, baseFee: 70000 },
        { maxArea: 6.0, baseFee: 80000 }, { maxArea: 7.0, baseFee: 90000 },
        { maxArea: 8.0, baseFee: 100000 }, { maxArea: 9.0, baseFee: 110000 },
        { maxArea: 10.0, baseFee: 120000 }, { maxArea: 20.0, baseFee: 212000 },
        { maxArea: 30.0, baseFee: 282000 }, { maxArea: 40.0, baseFee: 344500 },
        { maxArea: 50.0, baseFee: 403000 }, { maxArea: 60.0, baseFee: 466500 },
        { maxArea: 70.0, baseFee: 511500 },
      ],
      excessRatePerHa: 5000,
    },
    ORIGINAL_SURVEY: {
      tiers: [
        { maxArea: 0.5, baseFee: 45000 }, { maxArea: 1.0, baseFee: 60000 },
        { maxArea: 2.0, baseFee: 80000 }, { maxArea: 3.0, baseFee: 100000 },
        { maxArea: 4.0, baseFee: 120000 }, { maxArea: 5.0, baseFee: 140000 },
        { maxArea: 6.0, baseFee: 160000 }, { maxArea: 7.0, baseFee: 180000 },
        { maxArea: 8.0, baseFee: 200000 }, { maxArea: 9.0, baseFee: 220000 },
        { maxArea: 10.0, baseFee: 240000 }, { maxArea: 20.0, baseFee: 424000 },
        { maxArea: 30.0, baseFee: 564000 }, { maxArea: 40.0, baseFee: 689000 },
        { maxArea: 50.0, baseFee: 806000 }, { maxArea: 60.0, baseFee: 933000 },
        { maxArea: 70.0, baseFee: 1023000 },
      ],
      excessRatePerHa: 10000,
    },
    VERIFICATION_SURVEY: {
      tiers: [
        { maxArea: 0.5, baseFee: 55000 }, { maxArea: 1.0, baseFee: 75000 },
        { maxArea: 2.0, baseFee: 100000 }, { maxArea: 3.0, baseFee: 125000 },
        { maxArea: 4.0, baseFee: 150000 }, { maxArea: 5.0, baseFee: 175000 },
        { maxArea: 6.0, baseFee: 200000 }, { maxArea: 7.0, baseFee: 225000 },
        { maxArea: 8.0, baseFee: 250000 }, { maxArea: 9.0, baseFee: 275000 },
        { maxArea: 10.0, baseFee: 300000 }, { maxArea: 20.0, baseFee: 530000 },
        { maxArea: 30.0, baseFee: 705000 }, { maxArea: 40.0, baseFee: 861250 },
        { maxArea: 50.0, baseFee: 1007500 }, { maxArea: 60.0, baseFee: 1166250 },
        { maxArea: 70.0, baseFee: 1278750 },
      ],
      excessRatePerHa: 8000,
    },
  },
  SUBDIVISION_TARIFFS: {
    RESIDENTIAL: [
      { minLots: 2, maxLots: 4, baseFee: 38000, excessThreshold: 2, excessPerLot: 12000 },
      { minLots: 5, maxLots: 9, baseFee: 62000, excessThreshold: 5, excessPerLot: 11500 },
      { minLots: 10, maxLots: 19, baseFee: 108000, excessThreshold: 10, excessPerLot: 11000 },
      { minLots: 20, maxLots: 29, baseFee: 207000, excessThreshold: 20, excessPerLot: 10500 },
      { minLots: 30, maxLots: 39, baseFee: 301500, excessThreshold: 30, excessPerLot: 10000 },
      { minLots: 40, maxLots: 49, baseFee: 391500, excessThreshold: 40, excessPerLot: 9500 },
      { minLots: 50, maxLots: 99, baseFee: 477000, excessThreshold: 50, excessPerLot: 9000 },
      { minLots: 100, maxLots: 199, baseFee: 558000, excessThreshold: 100, excessPerLot: 6500 },
      { minLots: 200, maxLots: 299, baseFee: 1201500, excessThreshold: 200, excessPerLot: 5000 },
      { minLots: 300, maxLots: 399, baseFee: 1696500, excessThreshold: 300, excessPerLot: 4000 },
      { minLots: 400, maxLots: 499, baseFee: 2092500, excessThreshold: 400, excessPerLot: 3000 },
      { minLots: 500, maxLots: 999, baseFee: 2389500, excessThreshold: 500, excessPerLot: 2000 },
      { minLots: 1000, maxLots: Infinity, baseFee: 3387500, excessThreshold: 1000, excessPerLot: 1000 },
    ],
    AGRICULTURAL: [
      { minLots: 1, maxLots: 4, baseFee: 25000, excessThreshold: 2, excessPerLot: 6500 },
      { minLots: 5, maxLots: 9, baseFee: 38000, excessThreshold: 5, excessPerLot: 6000 },
      { minLots: 10, maxLots: 19, baseFee: 64000, excessThreshold: 10, excessPerLot: 5500 },
      { minLots: 20, maxLots: 29, baseFee: 122500, excessThreshold: 20, excessPerLot: 5000 },
      { minLots: 30, maxLots: 39, baseFee: 181000, excessThreshold: 30, excessPerLot: 4500 },
      { minLots: 40, maxLots: 49, baseFee: 239500, excessThreshold: 40, excessPerLot: 4000 },
      { minLots: 50, maxLots: 99, baseFee: 298000, excessThreshold: 50, excessPerLot: 3500 },
      { minLots: 100, maxLots: Infinity, baseFee: 616500, excessThreshold: 100, excessPerLot: 2500 },
    ],
    INSTITUTIONAL: [
      { minLots: 1, maxLots: 4, baseFee: 30000, excessThreshold: 2, excessPerLot: 6500 },
      { minLots: 5, maxLots: 9, baseFee: 43000, excessThreshold: 5, excessPerLot: 6000 },
      { minLots: 10, maxLots: 19, baseFee: 69000, excessThreshold: 10, excessPerLot: 5500 },
      { minLots: 20, maxLots: 29, baseFee: 127500, excessThreshold: 20, excessPerLot: 5000 },
      { minLots: 30, maxLots: 39, baseFee: 186000, excessThreshold: 30, excessPerLot: 4500 },
      { minLots: 40, maxLots: 49, baseFee: 244500, excessThreshold: 40, excessPerLot: 4000 },
      { minLots: 50, maxLots: 99, baseFee: 303000, excessThreshold: 50, excessPerLot: 3500 },
      { minLots: 100, maxLots: Infinity, baseFee: 621500, excessThreshold: 100, excessPerLot: 2500 },
    ],
  },
  LAND_USE_FACTORS: {
    RESIDENTIAL: 0.50, COMMERCIAL: 1.50, INDUSTRIAL: 1.20, MIXED_USE: 1.50,
    FORESHORE: 0.50, FORESTLAND: 0.50, PROTECTED_AREA: 0.50,
    AGRICULTURAL: 0.00, INSTITUTIONAL: 0.00,
  },
};

export class SurveyPricingEngine {
  static calculateBaseSurveyFee(type, areaInHectares) {
    const surveyConfig = CONFIG.SURVEY_TARIFFS[type.toUpperCase()];
    if (!surveyConfig) throw new Error(`Invalid Survey Type: ${type}`);
    const sortedTiers = [...surveyConfig.tiers].sort((a, b) => a.maxArea - b.maxArea);
    const matchedTier = sortedTiers.find(t => areaInHectares <= t.maxArea);
    if (matchedTier) return matchedTier.baseFee;
    const ceil = sortedTiers[sortedTiers.length - 1];
    return ceil.baseFee + (areaInHectares - ceil.maxArea) * surveyConfig.excessRatePerHa;
  }

  static calculateSubdivisionFee(projectType, numberOfLots) {
    const key = (projectType || '').toUpperCase();
    // Fallback: non-subdivision-tariff land uses (e.g. COMMERCIAL) use residential matrix as default
    const matrix = CONFIG.SUBDIVISION_TARIFFS[key] || CONFIG.SUBDIVISION_TARIFFS.RESIDENTIAL;
    const tier = matrix.find(t => numberOfLots >= t.minLots && numberOfLots <= t.maxLots);
    if (!tier) return 0;
    const excessLots = Math.max(0, numberOfLots - tier.excessThreshold);
    return tier.baseFee + excessLots * tier.excessPerLot;
  }

  static calculateTopographicFee(interval, areaInHectares, slopeDegrees = 0) {
    let rateConfig;
    switch (interval) {
      case 0.5: rateConfig = { first: 50000, tier2: 30000, tier3: 20000, floor: 15000 }; break;
      case 1.0: rateConfig = { first: 45000, tier2: 25000, tier3: 15000, floor: 10000 }; break;
      case 2.0: rateConfig = { first: 40000, tier2: 20000, tier3: 10000, floor: 8000 }; break;
      case 5.0: rateConfig = { first: 35000, tier2: 15000, tier3: 8000, floor: 6000 }; break;
      default: throw new Error("Invalid Contour Density Interval.");
    }
    let remaining = areaInHectares, cost = 0;
    if (remaining > 0) { const a = Math.min(remaining, 1); cost += a * rateConfig.first; remaining -= a; }
    if (remaining > 0) { const a = Math.min(remaining, 9); cost += a * rateConfig.tier2; remaining -= a; }
    if (remaining > 0) { const a = Math.min(remaining, 10); cost += a * rateConfig.tier3; remaining -= a; }
    if (remaining > 0) cost += remaining * rateConfig.floor;
    if (slopeDegrees > 18) cost *= 1.50;
    return cost;
  }

  static generateProjectQuote(params) {
    const {
      surveyTypes = [],
      areaInHectares,
      landUseType,
      topoInterval = null,
      slopeDegrees = 0,
      subdivisionFee = 0,
      additionalFixedCosts = 0,
      disbursements = 0,
    } = params;

    const baseSurveyFee = surveyTypes.reduce(
      (sum, t) => sum + this.calculateBaseSurveyFee(t, areaInHectares),
      0,
    );
    const zoningModifier = CONFIG.LAND_USE_FACTORS[(landUseType || '').toUpperCase()] || 0;
    const adjustedSurveyCost = baseSurveyFee * (1 + zoningModifier);
    const topographicCost = topoInterval
      ? this.calculateTopographicFee(topoInterval, areaInHectares, slopeDegrees)
      : 0;
    const disbursementsOverhead = disbursements * 0.20;
    const internalProjectCosts = adjustedSurveyCost + topographicCost + additionalFixedCosts;
    const establishmentFee = Math.max(1000, internalProjectCosts * 0.01);
    const operatingCost = internalProjectCosts + establishmentFee + disbursementsOverhead;
    const contingencyBuffer = operatingCost * 0.05;
    const firmProfit = operatingCost * 0.20;
    const preTax = operatingCost + contingencyBuffer + firmProfit;
    const statutoryVat = preTax * 0.12;
    const finalContractPrice = preTax + statutoryVat;

    return {
      breakdown: {
        baseSurveyFee,
        subdivisionFee,
        zoningAdjustment: adjustedSurveyCost - baseSurveyFee,
        adjustedSurveyCost,
        topographicCost,
        establishmentFee,
        disbursementsOverhead,
        contingencyBuffer,
        firmProfit,
        statutoryVat,
      },
      totalContractPrice: Math.round(finalContractPrice * 100) / 100,
    };
  }
}

export function formatPHP(value) {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency', currency: 'PHP', minimumFractionDigits: 2,
  }).format(value || 0);
}
