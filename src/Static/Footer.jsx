import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

// Footer component
const Footer = () => {
  // Navigation links data
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Careers", href: "#careers" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#blog" },
        { name: "Help Center", href: "#help" },
        { name: "Documentation", href: "#docs" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "Cookie Policy", href: "#cookies" },
      ],
    },
  ];

  // Social media links data
  const socialLinks = [
    { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" },
    { icon: <FaLinkedin />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaGithub />, href: "https://github.com", label: "GitHub" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const socialIconVariants = {
    hover: { scale: 1.2, rotate: 10, transition: { duration: 0.3 } },
  };

  return (
    <motion.footer
      className="bg-gradient-to-r from-indigo-950 to-blue-900 text-white py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold mb-4">Medicare</h2>
          <p className="text-gray-400 max-w-xs">
            Empowering smarter patient care with innovative solutions. Stay
            connected with us for updates and insights.
          </p>
        </motion.div>

        {/* Navigation Links */}
        {footerLinks.map((section, i) => (
          <motion.div key={i} variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, j) => (
                <motion.li key={j} variants={itemVariants} whileHover="hover">
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Newsletter Signup */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-md bg-gray-800 text-white border-none focus:outline-none"
            />
            <motion.button
              className="p-2 bg-blue-600 rounded-r-md hover:bg-blue-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Social Media and Copyright */}
      <motion.div
        className="max-w-[1200px] mx-auto px-4 mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center"
        variants={itemVariants}
      >
        <div className="flex space-x-4 mb-4 md:mb-0">
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              aria-label={social.label}
              className="text-gray-400 hover:text-white"
              whileHover="hover"
              variants={socialIconVariants}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Medicare. All rights reserved.
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
