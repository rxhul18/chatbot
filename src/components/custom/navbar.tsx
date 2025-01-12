import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <nav className="bg-black/10 text-white shadow-lg flex sticky top-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">
          <span className="text-primary">Plura</span>
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;