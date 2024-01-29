"use client"
import Error from "next/error";

export const NotFound = () => (
    <html lang="es">
        <body>
            <Error statusCode={404} />
        </body>
    </html>
);

export default NotFound;
