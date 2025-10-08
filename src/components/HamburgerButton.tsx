type NavProps = {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function HamburgerButton({ showNav, setShowNav }: NavProps) {
  return (
    <button
      onClick={() => setShowNav(!showNav)}
      className="group relative z-50 flex h-10 w-10 flex-col items-center justify-center space-y-1"
      aria-label="Toggle Navigation"
    >
      {/* Line 1 */}
      <span
        className={`block h-0.5 w-6 transform bg-ctp-crust-light transition-all duration-300 ${
          showNav ? "translate-y-1.5 rotate-45" : ""
        }`}
      ></span>

      {/* Line 2 */}
      <span
        className={`block h-0.5 w-6 bg-ctp-crust-light transition-all duration-300 ${
          showNav ? "opacity-0" : ""
        }`}
      ></span>

      {/* Line 3 */}
      <span
        className={`block h-0.5 w-6 transform bg-ctp-crust-light transition-all duration-300 ${
          showNav ? "-translate-y-1.5 -rotate-45" : ""
        }`}
      ></span>
    </button>
  );
}
