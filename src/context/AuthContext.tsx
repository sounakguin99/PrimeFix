"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  location: string;
  avatar: string;
  memberSince: string;
  tier: string;
  bio?: string;
  notificationsEnabled: boolean;
  newsletterEnabled: boolean;
}

interface AuthContextType {
  user: UserProfile;
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  updateProfile: (updatedUser: Partial<UserProfile>) => void;
  isLoading: boolean;
}

const DEFAULT_USER: UserProfile = {
  name: "Sounak Sen",
  email: "sounak.sen@primefix.in",
  phone: "+91 98765 43210",
  location: "Nanded, Maharashtra",
  avatar: "", // Empty string will prompt fallback to name initials
  memberSince: "June 2025",
  tier: "Gold Elite Member",
  bio: "Automotive enthusiast and home perfectionist. Always looking for top-notch engineering and repair services.",
  notificationsEnabled: true,
  newsletterEnabled: false,
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile>(DEFAULT_USER);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true); // Default to logged in for testing convenience
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Load from localStorage on mount (safe for SSR)
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("primefix_user");
      const storedAuth = localStorage.getItem("primefix_logged_in");

      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        // Save initial default user to local storage if not already present
        localStorage.setItem("primefix_user", JSON.stringify(DEFAULT_USER));
      }

      if (storedAuth !== null) {
        setIsLoggedIn(storedAuth === "true");
      } else {
        localStorage.setItem("primefix_logged_in", "true");
      }
    } catch (error) {
      console.error("Failed to load user state from localStorage:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem("primefix_logged_in", "true");
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("primefix_logged_in", "false");
  };

  const updateProfile = (updatedUser: Partial<UserProfile>) => {
    setUser((prev) => {
      const newUser = { ...prev, ...updatedUser };
      try {
        localStorage.setItem("primefix_user", JSON.stringify(newUser));
      } catch (error) {
        console.error("Failed to save user state to localStorage:", error);
      }
      return newUser;
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        login,
        logout,
        updateProfile,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
