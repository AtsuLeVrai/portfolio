import { Eczar, Lexend, Poppins } from "next/font/google";
import localFont from "next/font/local";

export const helvetica = localFont({
    src: "../fonts/helvetica/helvetica.ttf",
    variable: "--font-helvetica",
    weight: "100 900",
});

export const lexend = Lexend();

export const eczar = Eczar();

export const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
