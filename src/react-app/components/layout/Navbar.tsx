import { useState } from "react";
import { Link } from "react-router";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface NavbarProps {
  cartItemCount?: number;
  onLoginClick: () => void;
  onCartClick: () => void;
}

export default function Navbar({ cartItemCount = 0, onLoginClick, onCartClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Básquet", path: "/categoria/basketball" },
    { name: "Fútbol", path: "/categoria/football" },
    { name: "Senderismo", path: "/categoria/hiking" },
    { name: "Más Vendidos", path: "/mas-vendidos" },
    { name: "Temporada", path: "/temporada" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">
              TeniStar
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Search, Cart, Login */}
          <div className="flex items-center gap-3">
            {/* Search Bar - Desktop */}
            <div className="hidden md:flex items-center relative">
              <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar tenis..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 w-48 lg:w-64 h-9 bg-secondary/50 border-0 focus-visible:ring-primary"
              />
            </div>

            {/* Cart Button */}
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={onCartClick}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Button>

            {/* Login Button */}
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-white"
              onClick={onLoginClick}
            >
              <User className="h-4 w-4" />
              <span>Ingresar</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            {/* Mobile Search */}
            <div className="flex items-center relative mb-4 md:hidden">
              <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar tenis..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 w-full bg-secondary/50 border-0"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                variant="outline"
                className="mt-2 sm:hidden border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => {
                  onLoginClick();
                  setIsMenuOpen(false);
                }}
              >
                <User className="h-4 w-4 mr-2" />
                Ingresar
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
