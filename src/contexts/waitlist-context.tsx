"use client";

import WaitlistModal from "@/components/waitlist-modal";
import { createContext, ReactNode, useContext, useState } from "react";

interface WaitlistContextProps {
  isModalOpen: boolean;
  toggleModal: () => void;
}

const waitlistDefaultValues: WaitlistContextProps = {
  isModalOpen: false,
  toggleModal: () => {},
};

const WaitlistContext = createContext<WaitlistContextProps>(
  waitlistDefaultValues,
);

export default function WaitlistProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(
    waitlistDefaultValues.isModalOpen,
  );

  const handleToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <WaitlistContext.Provider
      value={{ isModalOpen, toggleModal: handleToggleModal }}
    >
      {children}
      {isModalOpen && <WaitlistModal onClose={handleToggleModal} />}
    </WaitlistContext.Provider>
  );
}

export function useWaitlist() {
  const context = useContext(WaitlistContext);

  if (context === undefined) {
    throw new Error("Waitlist Context is being used out of scope!");
  }

  return context;
}
