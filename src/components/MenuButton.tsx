import type { Dispatch, SetStateAction } from "react";

type MenuButtonProps = {
    readonly isOpen: boolean;
    readonly setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export function MenuButton({ isOpen, setIsOpen }: MenuButtonProps) {
    return (
        <div className="flex items-center space-x-1 z-50">
            <h1 className={`uppercase ${isOpen ? "text-olive" : "text-antique-white"}`}>Menu</h1>
            <button
                type="button"
                className="relative w-10 h-10 focus:outline-none"
                aria-label="Menu"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="absolute inset-0 flex flex-col items-end justify-center">
                    <span
                        className={`block w-6 h-0.5 transition-all duration-300 ease-in-out ${
                            isOpen ? "bg-olive rotate-45" : "bg-antique-white mb-1.5"
                        }`}
                    />
                    <span
                        className={`block h-0.5 transition-all duration-300 ease-in-out ${
                            isOpen ? "bg-olive w-6 -rotate-45 -translate-y-0.5" : "bg-antique-white w-5"
                        }`}
                    />
                </div>
            </button>
        </div>
    );
}
