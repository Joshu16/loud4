// Web Vitals monitoring
// Mide y reporta métricas de performance clave

// Función para enviar métricas a analytics (si está disponible)
function sendToAnalytics(metric) {
  // Enviar a Google Analytics si está disponible
  if (window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  }

  // También loggear en consola en desarrollo
  if (import.meta.env.DEV) {
    console.log(`[Web Vitals] ${metric.name}:`, metric.value, metric.id);
  }
}

// Función para medir Web Vitals usando la API nativa
export function measureWebVitals() {
  // Solo medir en producción o cuando se solicite explícitamente
  if (import.meta.env.PROD || window.ENABLE_WEB_VITALS) {
    // LCP - Largest Contentful Paint
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          
          sendToAnalytics({
            name: 'LCP',
            value: lastEntry.renderTime || lastEntry.loadTime,
            id: lastEntry.id || 'unknown',
          });
        });
        
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        // PerformanceObserver no soportado o error
        if (import.meta.env.DEV) {
          console.warn('LCP measurement not supported:', e);
        }
      }
    }

    // FID - First Input Delay
    if ('PerformanceObserver' in window) {
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            sendToAnalytics({
              name: 'FID',
              value: entry.processingStart - entry.startTime,
              id: entry.name || 'unknown',
            });
          });
        });
        
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        if (import.meta.env.DEV) {
          console.warn('FID measurement not supported:', e);
        }
      }
    }

    // CLS - Cumulative Layout Shift
    if ('PerformanceObserver' in window) {
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          
          // Reportar CLS cuando la página se descarga
          if (document.visibilityState === 'hidden') {
            sendToAnalytics({
              name: 'CLS',
              value: clsValue,
              id: 'final',
            });
          }
        });
        
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        if (import.meta.env.DEV) {
          console.warn('CLS measurement not supported:', e);
        }
      }
    }

    // FCP - First Contentful Paint
    if ('PerformanceObserver' in window) {
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              sendToAnalytics({
                name: 'FCP',
                value: entry.startTime,
                id: entry.name || 'unknown',
              });
            }
          });
        });
        
        fcpObserver.observe({ entryTypes: ['paint'] });
      } catch (e) {
        if (import.meta.env.DEV) {
          console.warn('FCP measurement not supported:', e);
        }
      }
    }

    // TTFB - Time to First Byte
    if (window.performance && window.performance.timing) {
      window.addEventListener('load', () => {
        const timing = window.performance.timing;
        const ttfb = timing.responseStart - timing.navigationStart;
        
        sendToAnalytics({
          name: 'TTFB',
          value: ttfb,
          id: 'navigation',
        });
      });
    }
  }
}

// Medir tiempo de carga de página
export function measurePageLoadTime() {
  if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      
      if (window.gtag) {
        window.gtag('event', 'page_load_time', {
          value: pageLoadTime,
          event_category: 'Performance',
        });
      }
      
      if (import.meta.env.DEV) {
        console.log('[Performance] Page Load Time:', pageLoadTime, 'ms');
      }
    });
  }
}

