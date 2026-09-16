/**
 * Statistics Page - Enhanced Animations & Charts
 * Better Roxas Portal - Minimal Professional Design
 */

// Brand colors
const COLORS = {
  primary: '#0032a0',
  primaryDark: '#002170',
  secondary: '#003D82',
  accent: '#F77F00',
  success: '#06A77D',
  info: '#0077BE',
};

// Barangay data (2020 Census, PSA — the latest release with a per-barangay
// breakdown; the 2024 total of 185,236 is city-wide only). These 47 figures
// sum to the published 2020 city total of 179,292.
const barangayData = [
  { name: 'Lawa-an', pop: 11484 },
  { name: 'Baybay', pop: 9732 },
  { name: 'Banica', pop: 8950 },
  { name: 'Tiza', pop: 8919 },
  { name: 'Bolo', pop: 8001 },
  { name: 'Culasi', pop: 7869 },
  { name: 'Libas', pop: 7802 },
  { name: 'Milibili', pop: 7120 },
  { name: 'Dinginan', pop: 7064 },
  { name: 'Lanot', pop: 6421 },
  { name: 'Cagay', pop: 6333 },
  { name: 'Tanque', pop: 5922 },
  { name: 'Punta Tabuc', pop: 5782 },
  { name: 'Mongpong', pop: 5286 },
  { name: 'Dayao', pop: 5211 },
  { name: 'Inzo Arnaldo Village', pop: 4930 },
  { name: 'San Jose', pop: 4406 },
  { name: 'Dumolog', pop: 4014 },
  { name: 'Sibaguan', pop: 3875 },
  { name: 'Lonoy', pop: 3080 },
  { name: 'Barra', pop: 2947 },
  { name: 'Jumaguicjic', pop: 2778 },
  { name: 'Adlawan', pop: 2597 },
  { name: 'Cabugao', pop: 2422 },
  { name: 'Loctugan', pop: 2359 },
  { name: 'Tanza', pop: 2354 },
  { name: 'Bato', pop: 2348 },
  { name: 'Talon', pop: 2236 },
  { name: 'Cogon', pop: 2204 },
  { name: 'Balijuagan', pop: 2166 },
  { name: 'Poblacion VII', pop: 2117 },
  { name: 'Culajao', pop: 2099 },
  { name: 'Bago', pop: 2047 },
  { name: 'Poblacion V', pop: 1934 },
  { name: 'Poblacion IX', pop: 1794 },
  { name: 'Gabu-an', pop: 1521 },
  { name: 'Poblacion I', pop: 1443 },
  { name: 'Liong', pop: 1420 },
  { name: 'Poblacion II', pop: 1382 },
  { name: 'Poblacion X', pop: 1352 },
  { name: 'Punta Cogon', pop: 1216 },
  { name: 'Poblacion XI', pop: 1174 },
  { name: 'Olotayan', pop: 1058 },
  { name: 'Poblacion VIII', pop: 975 },
  { name: 'Poblacion III', pop: 523 },
  { name: 'Poblacion VI', pop: 490 },
  { name: 'Poblacion IV', pop: 135 },
];

// Historical data (PSA census counts; 2024 is the latest census total)
const historicalData = {
  years: [1990, 1995, 2000, 2007, 2010, 2015, 2020, 2024],
  populations: [103171, 118715, 126352, 147738, 156197, 167003, 179292, 185236],
};

// Chart instances
let charts = {};

/**
 * Animate number counting
 */
function animateCount(element, target, duration = 2000) {
  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (target - start) * easeOut);

    element.textContent = current.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = target.toLocaleString();
    }
  }

  requestAnimationFrame(update);
}

/**
 * Intersection Observer for scroll animations
 */
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');

            // Trigger count animation for metric cards
            const countEl = entry.target.querySelector('[data-count]');
            if (countEl) {
              const target = parseInt(countEl.dataset.count);
              animateCount(countEl, target);
            }

            // Animate bars
            animateBars(entry.target);
          }, delay);

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll('.animate-on-scroll, .metric-card').forEach((el) => {
    observer.observe(el);
  });
}

/**
 * Animate progress bars within an element
 */
function animateBars(container) {
  // Breakdown bars
  container.querySelectorAll('.breakdown-segment').forEach((bar) => {
    const width = bar.dataset.width;
    if (width) {
      setTimeout(() => {
        bar.style.width = width + '%';
      }, 300);
    }
  });

  // Barangay bars
  container.querySelectorAll('.bar-wrap .bar').forEach((bar) => {
    const width = bar.dataset.width;
    if (width) {
      setTimeout(() => {
        bar.style.width = width + '%';
      }, 100);
    }
  });

  // Sector bars
  container.querySelectorAll('.sector-bar, .sc-fill').forEach((bar) => {
    const width = bar.dataset.width;
    if (width) {
      setTimeout(() => {
        bar.style.width = width + '%';
      }, 200);
    }
  });

  // Poverty bars
  container.querySelectorAll('.poverty-fill').forEach((bar) => {
    const width = bar.dataset.width;
    if (width) {
      setTimeout(() => {
        bar.style.width = width * 10 + '%';
      }, 300);
    }
  });
}

/**
 * Replaces a chart canvas with a short notice.
 * The Roxas City figures are still being sourced, so an empty dataset renders
 * an explanation rather than an empty chart frame.
 */
function renderPendingNotice(canvas) {
  const wrap = canvas.parentElement;
  if (!wrap || wrap.querySelector('.chart-pending')) return;
  canvas.style.display = 'none';
  const note = document.createElement('p');
  note.className = 'chart-pending';
  note.textContent = 'Data for Roxas City is not yet available.';
  wrap.appendChild(note);
}

/**
 * Create Historical Line Chart
 */
function createHistoricalChart() {
  const ctx = document.getElementById('historicalLineChart');
  if (!ctx) return;
  if (!historicalData.populations.length) return renderPendingNotice(ctx);

  const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, 'rgba(0, 50, 160, 0.2)');
  gradient.addColorStop(1, 'rgba(0, 50, 160, 0)');

  charts.historical = new Chart(ctx, {
    type: 'line',
    data: {
      labels: historicalData.years,
      datasets: [
        {
          label: 'Population',
          data: historicalData.populations,
          borderColor: COLORS.primary,
          backgroundColor: gradient,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: COLORS.primary,
          pointBorderColor: '#fff',
          pointBorderWidth: 3,
          pointRadius: 6,
          pointHoverRadius: 8,
          pointHoverBorderWidth: 3,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 2000,
        easing: 'easeOutQuart',
      },
      interaction: {
        intersect: false,
        mode: 'index',
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(0, 50, 160, 0.95)',
          titleFont: { size: 14, weight: '600' },
          bodyFont: { size: 13 },
          padding: 12,
          cornerRadius: 8,
          displayColors: false,
          callbacks: {
            label: (ctx) => `Population: ${ctx.raw.toLocaleString()}`,
          },
        },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { size: 12 } },
        },
        y: {
          beginAtZero: false,
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: {
            font: { size: 12 },
            callback: (v) => v / 1000 + 'K',
          },
        },
      },
    },
  });
}

/**
 * Create Distribution Pie Chart
 */
function createDistributionChart() {
  const ctx = document.getElementById('distributionPieChart');
  if (!ctx) return;
  if (!barangayData.length) return renderPendingNotice(ctx);

  const top10 = barangayData.slice(0, 10);
  const colors = [
    COLORS.primary,
    COLORS.accent,
    COLORS.success,
    COLORS.info,
    '#8B5CF6',
    '#EC4899',
    '#14B8A6',
    '#F59E0B',
    '#6366F1',
    COLORS.secondary,
  ];

  charts.distribution = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: top10.map((d) => d.name),
      datasets: [
        {
          data: top10.map((d) => d.pop),
          backgroundColor: colors,
          borderColor: '#fff',
          borderWidth: 3,
          hoverBorderWidth: 3,
          hoverOffset: 8,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        animateRotate: true,
        animateScale: true,
        duration: 1500,
        easing: 'easeOutQuart',
      },
      cutout: '55%',
      plugins: {
        legend: {
          position: 'right',
          labels: {
            boxWidth: 14,
            padding: 12,
            font: { size: 12 },
            usePointStyle: true,
            pointStyle: 'circle',
          },
        },
        tooltip: {
          backgroundColor: 'rgba(0, 50, 160, 0.95)',
          titleFont: { size: 14, weight: '600' },
          bodyFont: { size: 13 },
          padding: 12,
          cornerRadius: 8,
          callbacks: {
            label: (ctx) => {
              const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
              const pct = ((ctx.raw / total) * 100).toFixed(1);
              return `${ctx.raw.toLocaleString()} (${pct}%)`;
            },
          },
        },
      },
    },
  });
}

/**
 * Create Population Bar Chart
 */
function createBarChart() {
  const ctx = document.getElementById('populationBarChart');
  if (!ctx) return;
  if (!barangayData.length) return renderPendingNotice(ctx);

  const sorted = [...barangayData].sort((a, b) => b.pop - a.pop);

  charts.bar = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: sorted.map((d) => d.name),
      datasets: [
        {
          label: 'Population',
          data: sorted.map((d) => d.pop),
          backgroundColor: sorted.map((_, i) => {
            const opacity = 1 - i * 0.03;
            return `rgba(0, 50, 160, ${opacity})`;
          }),
          borderRadius: 4,
          borderSkipped: false,
        },
      ],
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 1500,
        easing: 'easeOutQuart',
        delay: (ctx) => ctx.dataIndex * 50,
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(0, 50, 160, 0.95)',
          titleFont: { size: 14, weight: '600' },
          bodyFont: { size: 13 },
          padding: 12,
          cornerRadius: 8,
          displayColors: false,
          callbacks: {
            label: (ctx) => `Population: ${ctx.raw.toLocaleString()}`,
          },
        },
      },
      scales: {
        x: {
          beginAtZero: true,
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: {
            font: { size: 11 },
            callback: (v) => v.toLocaleString(),
          },
        },
        y: {
          grid: { display: false },
          ticks: { font: { size: 11 } },
        },
      },
    },
  });
}

/**
 * Initialize all charts with lazy loading
 */
function initCharts() {
  const chartObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const chartId = entry.target.id;

          if (chartId === 'historicalLineChart' && !charts.historical) {
            createHistoricalChart();
          } else if (chartId === 'distributionPieChart' && !charts.distribution) {
            createDistributionChart();
          } else if (chartId === 'populationBarChart' && !charts.bar) {
            createBarChart();
          }

          chartObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('canvas').forEach((canvas) => {
    chartObserver.observe(canvas);
  });
}

/**
 * Initialize economy section counters
 */
function initEconomyCounters() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const countEl = entry.target.querySelector('[data-count]');
          if (countEl) {
            const target = parseInt(countEl.dataset.count);
            animateCount(countEl, target, 1500);
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll('.economy-card').forEach((card) => {
    observer.observe(card);
  });
}

/**
 * CMCI (Competitive Index) Data
 */
// TODO: populate with DTI CMCI scores for Roxas City. Score series are
// deliberately empty: the previous values were Solano's.
const cmciData = {
  years: [],
  pillars: {
    economicDynamism: {
      labels: [
        'Local Economy Size',
        'Economy Growth',
        'Active Establishments',
        'Safety Compliant',
        'Employment',
      ],
      data: [[], [], [], [], []],
    },
    governmentEfficiency: {
      labels: [
        'Cost of Living',
        'Cost of Business',
        'Financial Deepening',
        'Productivity',
        'Compliance',
      ],
      data: [[], [], [], [], []],
    },
    infrastructure: {
      labels: [
        'Road Network',
        'Distance to Ports',
        'Basic Utilities',
        'Transportation',
        'IT Capacity',
      ],
      data: [[], [], [], [], []],
    },
    resiliency: {
      labels: ['DRR Plan', 'Disaster Drill', 'Early Warning', 'DRRMP Budget', 'Risk Assessments'],
      data: [[], [], [], [], []],
    },
    innovation: {
      labels: [
        'ICT Plan',
        'R&D Expenditures',
        'E-BPLS Software',
        'STEM Graduates',
        'Innovation Facilities',
      ],
      data: [[], [], [], [], []],
    },
  },
  keyIndicators: {
    labels: ['Health', 'Education', 'Social Protection', 'Peace & Order', 'LGU Investment'],
    data: [[], [], [], [], []],
  },
};

/**
 * Create CMCI Overview Chart
 */
function createCMCIOverviewChart() {
  const ctx = document.getElementById('cmciOverviewChart');
  if (!ctx || charts.cmciOverview) return;
  if (!cmciData.years.length) return renderPendingNotice(ctx);

  const chartColors = [COLORS.primary, COLORS.accent, COLORS.success, COLORS.info, '#8B5CF6'];

  charts.cmciOverview = new Chart(ctx, {
    type: 'line',
    data: {
      labels: cmciData.years,
      datasets: cmciData.keyIndicators.labels.map((label, i) => ({
        label: label,
        data: cmciData.keyIndicators.data[i],
        borderColor: chartColors[i],
        backgroundColor: chartColors[i] + '20',
        fill: false,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
      })),
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 1500, easing: 'easeOutQuart' },
      interaction: { intersect: false, mode: 'index' },
      plugins: {
        legend: {
          position: 'bottom',
          labels: { boxWidth: 12, padding: 16, font: { size: 11 }, usePointStyle: true },
        },
        tooltip: {
          backgroundColor: 'rgba(0, 50, 160, 0.95)',
          padding: 12,
          cornerRadius: 8,
          callbacks: {
            label: (ctx) =>
              ctx.raw !== null
                ? `${ctx.dataset.label}: ${ctx.raw.toFixed(4)}`
                : `${ctx.dataset.label}: N/A`,
          },
        },
      },
      scales: {
        x: { grid: { display: false }, ticks: { font: { size: 11 } } },
        y: {
          beginAtZero: true,
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: { font: { size: 11 } },
        },
      },
    },
  });
}

/**
 * Create CMCI Pillar Chart
 */
function createCMCIPillarChart(pillarKey, canvasId) {
  const ctx = document.getElementById(canvasId);
  if (!ctx || charts[canvasId]) return;
  if (!cmciData.years.length) return renderPendingNotice(ctx);

  const pillarData = cmciData.pillars[pillarKey];
  if (!pillarData) return;

  const chartColors = [COLORS.primary, COLORS.accent, COLORS.success, COLORS.info, '#8B5CF6'];

  charts[canvasId] = new Chart(ctx, {
    type: 'line',
    data: {
      labels: cmciData.years,
      datasets: pillarData.labels.map((label, i) => ({
        label: label,
        data: pillarData.data[i],
        borderColor: chartColors[i],
        backgroundColor: chartColors[i] + '20',
        fill: false,
        tension: 0.4,
        pointRadius: 3,
        pointHoverRadius: 5,
        borderWidth: 2,
      })),
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 1200, easing: 'easeOutQuart' },
      interaction: { intersect: false, mode: 'index' },
      plugins: {
        legend: {
          position: 'bottom',
          labels: { boxWidth: 10, padding: 12, font: { size: 10 }, usePointStyle: true },
        },
        tooltip: {
          backgroundColor: 'rgba(0, 50, 160, 0.95)',
          padding: 10,
          cornerRadius: 6,
          callbacks: {
            label: (ctx) =>
              ctx.raw !== null
                ? `${ctx.dataset.label}: ${ctx.raw.toFixed(4)}`
                : `${ctx.dataset.label}: N/A`,
          },
        },
      },
      scales: {
        x: { grid: { display: false }, ticks: { font: { size: 10 } } },
        y: {
          beginAtZero: true,
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: { font: { size: 10 } },
        },
      },
    },
  });
}

/**
 * Initialize CMCI Tab Navigation
 */
function initCMCITabs() {
  const tabs = document.querySelectorAll('.cmci-tab');
  const panels = document.querySelectorAll('.cmci-panel');

  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const pillar = tab.dataset.pillar;

      // Update active tab
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      // Update active panel
      panels.forEach((p) => p.classList.remove('active'));
      const activePanel = document.getElementById(`panel-${pillar}`);
      if (activePanel) {
        activePanel.classList.add('active');

        // Create chart for this panel if needed
        if (pillar === 'overview') {
          createCMCIOverviewChart();
        } else if (pillar === 'economic-dynamism') {
          createCMCIPillarChart('economicDynamism', 'cmciEconomicChart');
        } else if (pillar === 'government-efficiency') {
          createCMCIPillarChart('governmentEfficiency', 'cmciGovernmentChart');
        } else if (pillar === 'infrastructure') {
          createCMCIPillarChart('infrastructure', 'cmciInfraChart');
        } else if (pillar === 'resiliency') {
          createCMCIPillarChart('resiliency', 'cmciResiliencyChart');
        } else if (pillar === 'innovation') {
          createCMCIPillarChart('innovation', 'cmciInnovationChart');
        }

        // Animate indicator bars
        animateCMCIBars(activePanel);
      }
    });
  });
}

/**
 * Animate CMCI indicator bars
 */
function animateCMCIBars(container) {
  container.querySelectorAll('.indicator-fill').forEach((bar) => {
    const value = bar.dataset.value;
    if (value) {
      setTimeout(() => {
        bar.style.setProperty('--fill-width', value + '%');
        bar.classList.add('animated');
      }, 100);
    }
  });
}

/**
 * Initialize CMCI Section
 */
function initCMCISection() {
  const cmciSection = document.getElementById('competitive-index');
  if (!cmciSection) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          initCMCITabs();
          createCMCIOverviewChart();
          animateCMCIBars(document.getElementById('panel-overview'));
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(cmciSection);
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initCharts();
  initEconomyCounters();
  initCMCISection();
});

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    barangayData,
    historicalData,
    cmciData,
    COLORS,
    animateCount,
  };
}
