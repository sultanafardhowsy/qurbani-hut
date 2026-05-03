
import Link from 'next/link';
import Image from 'next/image';

// Social Icons from assets
import facebookIcon from "@/assets/facebook.png";
import instagramIcon from "@/assets/instagram.png";
import twitterIcon from "@/assets/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-[#D4AF37] text-black mt-12">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10">

        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* About Us */}
          <div>
            <h3 className="text-lg font-bold text-black mb-4">
              About Us
            </h3>
            <p className="text-sm sm:text-base text-black leading-relaxed mb-4">
              Your trusted online livestock marketplace for premium cows, goats,
              sheep, and camels. Safe and reliable animal trading across Bangladesh.
            </p>

           
          </div>

          {/* Contact Info */}
          <div className='px-10'>
            <h3 className="text-lg font-bold text-black mb-4">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm sm:text-base text-black">
              <li>📍 Dhaka, Bangladesh</li>
              <li>📞 +880 1234-567890</li>
              <li>✉️ support@qurbanihaat.com</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className='px-10'>
            <h3 className="text-lg font-bold text-black mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="hover:scale-110 transition-transform"
              >
                <Image
                  src={facebookIcon}
                  alt="Facebook"
                  width={35}
                  height={35}
                  className="rounded-full"
                />
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                className="hover:scale-110 transition-transform"
              >
                <Image
                  src={instagramIcon}
                  alt="Instagram"
                  width={35}
                  height={35}
                  className="rounded-full bg-amber-50"
                />
              </Link>

              <Link
                href="https://twitter.com"
                target="_blank"
                className="hover:scale-110 transition-transform"
              >
                <Image
                  src={twitterIcon}
                  alt="Twitter"
                  width={35}
                  height={35}
                  className="rounded-full bg-amber-50"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-black mt-8 pt-6 text-center text-sm sm:text-base text-black">
          © {new Date().getFullYear()} Qurbani Haat. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;