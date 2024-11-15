"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (e: React.FormEvent) => void;
  searchValue: string;
  onSearchChange: (value: string) => void;
}

export function MobileMenu({ 
  isOpen, 
  onClose, 
  onSearch, 
  searchValue, 
  onSearchChange 
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed right-0 top-0 h-full w-full max-w-xs bg-background shadow-lg z-50 border-l"
          >
            <div className="p-4 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Menu</h2>
                <motion.button
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2"
                >
                  <X className="h-6 w-6" />
                </motion.button>
              </div>

              <form onSubmit={onSearch} className="flex gap-2">
                <Input
                  type="search"
                  placeholder="Search recipes..."
                  value={searchValue}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit">Search</Button>
              </form>

              <nav className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link 
                    href="/categories" 
                    className="block p-2 hover:bg-accent rounded-md"
                    onClick={onClose}
                  >
                    Categories
                  </Link>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link 
                    href="/random" 
                    className="block p-2 hover:bg-accent rounded-md"
                    onClick={onClose}
                  >
                    Random Recipe
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}