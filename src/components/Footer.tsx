
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-accent/30 bg-primary">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-2">
            <div className="text-xl font-playfair font-semibold text-accent">Manish Makeover</div>
            <p className="text-sm text-light/70">
              More Than a Makeover — A Salon Experience That Transforms You Inside Out.
            </p>
          </div>
          
          <div className="flex flex-col space-y-2">
            <h3 className="font-playfair font-medium text-light">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#best-sellers" className="text-light/70 hover:text-accent transition-colors">Trending Now</a></li>
              <li><a href="#all-products" className="text-light/70 hover:text-accent transition-colors">All Services</a></li>
              <li><a href="#about" className="text-light/70 hover:text-accent transition-colors">About Me</a></li>
              <li><a href="#contact" className="text-light/70 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="flex flex-col space-y-2">
            <h3 className="font-playfair font-medium text-light">Contact</h3>
            <p className="text-sm text-light/70">Email: contact@manishmakeover.com</p>
            <p className="text-sm text-light/70">Phone: +91 98765 43201</p>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-accent/20 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-light/70">
            &copy; {currentYear} Manish Makeover. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-xs text-light/70 hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-light/70 hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
