import React from "react";

type MenuButtonProps = {
    readonly isOpen: boolean;
    readonly setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function MenuButton({ isOpen, setIsOpen }: MenuButtonProps) {
    return (
        <div className="flex items-center space-x-1">
            <h1 className="uppercase">Menu</h1>
            <button
                type="button"
                className="relative w-10 h-10 focus:outline-none"
                aria-label="Menu"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="absolute inset-0 flex flex-col items-end justify-center">
                    <span
                        className={`block w-6 h-0.5 bg-antique-white transition-all duration-300 ease-in-out ${
                            isOpen ? "rotate-45" : "mb-1.5"
                        }`}
                    />
                    <span
                        className={`block h-0.5 bg-antique-white transition-all duration-300 ease-in-out ${
                            isOpen ? "w-6 -rotate-45 -translate-y-0.5" : "w-5"
                        }`}
                    />
                </div>
            </button>
        </div>
    );
}
