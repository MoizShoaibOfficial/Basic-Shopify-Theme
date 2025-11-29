// Global JavaScript for Shopify Theme

// Cart functionality
class CartDrawer {
  constructor() {
    this.init();
  }

  init() {
    this.updateCartCount();
    this.bindEvents();
  }

  bindEvents() {
    // Update cart count when items are added
    document.addEventListener('cart:updated', () => {
      this.updateCartCount();
    });
  }

  async updateCartCount() {
    try {
      const response = await fetch('/cart.js');
      const cart = await response.json();
      const cartCountElements = document.querySelectorAll('[data-cart-count]');
      cartCountElements.forEach(element => {
        element.textContent = cart.item_count;
        element.style.display = cart.item_count > 0 ? 'flex' : 'none';
      });
    } catch (error) {
      console.error('Error updating cart count:', error);
    }
  }
}

// Product form submission
class ProductForm {
  constructor(form) {
    this.form = form;
    this.init();
  }

  init() {
    if (!this.form) return;
    
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
  }

  async handleSubmit(event) {
    event.preventDefault();
    
    const submitButton = this.form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.disabled = true;
    submitButton.textContent = 'Adding...';

    const formData = new FormData(this.form);
    
    try {
      const response = await fetch(window.routes.cart_add_url, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const data = await response.json();
        submitButton.textContent = 'Added!';
        
        // Dispatch event to update cart count
        document.dispatchEvent(new CustomEvent('cart:updated'));
        
        // Reset button after 2 seconds
        setTimeout(() => {
          submitButton.disabled = false;
          submitButton.textContent = originalText;
        }, 2000);
      } else {
        throw new Error('Failed to add to cart');
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      submitButton.disabled = false;
      submitButton.textContent = originalText;
      alert('Failed to add item to cart. Please try again.');
    }
  }
}

// Mobile menu toggle
class MobileMenu {
  constructor() {
    this.toggle = document.querySelector('.header__mobile-toggle');
    this.menu = document.querySelector('.header__menu');
    this.init();
  }

  init() {
    if (!this.toggle || !this.menu) return;
    
    this.toggle.addEventListener('click', this.handleToggle.bind(this));
  }

  handleToggle() {
    this.menu.classList.toggle('active');
    this.toggle.classList.toggle('active');
  }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize cart drawer
  new CartDrawer();
  
  // Initialize product forms
  const productForms = document.querySelectorAll('#product-form');
  productForms.forEach(form => {
    new ProductForm(form);
  });
  
  // Initialize mobile menu
  new MobileMenu();
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// Lazy loading images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

