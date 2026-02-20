import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-charcoal text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-serif tracking-widest mb-6 uppercase">
              Hôtel de Luxe Marrakech
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed mb-6 font-sans">
              Le guide référence de l&apos;hospitalité d&apos;exception dans la
              Ville Rouge.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-serif tracking-widest mb-6 uppercase">
              Exploration
            </h4>
            <ul className="space-y-4 text-sm text-stone-400 font-sans">
              <li>
                <Link
                  href="/hotels"
                  className="hover:text-gold-500 transition-colors"
                >
                  Hôtels & Riads
                </Link>
              </li>
              <li>
                <Link
                  href="/spas"
                  className="hover:text-gold-500 transition-colors"
                >
                  Spas & Bien-être
                </Link>
              </li>
              <li>
                <Link
                  href="/gastronomie"
                  className="hover:text-gold-500 transition-colors"
                >
                  Gastronomie
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="hover:text-gold-500 transition-colors"
                >
                  Guides de Voyage
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-serif tracking-widest mb-6 uppercase">
              Société
            </h4>
            <ul className="space-y-4 text-sm text-stone-400 font-sans">
              <li>
                <Link
                  href="/histoire"
                  className="hover:text-gold-500 transition-colors"
                >
                  Notre Histoire
                </Link>
              </li>
              <li>
                <Link
                  href="/partenariat"
                  className="hover:text-gold-500 transition-colors"
                >
                  Devenir Partenaire
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gold-500 transition-colors"
                >
                  Contactez-nous
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-serif tracking-widest mb-6 uppercase">
              Archives
            </h4>
            <ul className="space-y-4 text-sm text-stone-400 font-sans">
              <li>
                <Link
                  href="/galerie"
                  className="hover:text-gold-500 transition-colors"
                >
                  Galerie Photos
                </Link>
              </li>
              <li>
                <Link
                  href="/cgv"
                  className="hover:text-gold-500 transition-colors"
                >
                  Conditions Générales
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="hover:text-gold-500 transition-colors"
                >
                  Mentions Légales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 uppercase tracking-widest">
          <p>© {currentYear} Hôtel de Luxe Marrakech. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold-500 transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-gold-500 transition-colors">
              Facebook
            </a>
            <a href="#" className="hover:text-gold-500 transition-colors">
              Pinterest
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
