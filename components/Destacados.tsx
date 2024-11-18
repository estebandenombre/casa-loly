import { Box, Typography, IconButton } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

const destacados = [
    {
        title: "Tomato Salad",
        category: "Vegetable",
        image: "/tomato-salad.jpg",
        price: 20,
    },
    {
        title: "Paella Valenciana",
        category: "Traditional",
        image: "/paella.jpg",
        price: 25,
    },
    {
        title: "Arroz Negro",
        category: "Seafood",
        image: "/arroz-negro.jpg",
        price: 22,
    },
];

export default function DestacadosSection() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "16px",
                py: 4,
                px: 2,
                backgroundColor: "#f5f5f5",
            }}
        >
            {destacados.map((plato, index) => (
                <Box
                    key={index}
                    sx={{
                        width: "260px",
                        backgroundColor: "white",
                        borderRadius: "16px",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                        textAlign: "center",
                        overflow: "hidden",
                        position: "relative",
                    }}
                >
                    {/* Imagen redonda */}
                    <Box
                        sx={{
                            position: "relative",
                            width: "100%",
                            height: "160px",
                            borderRadius: "50%",
                            overflow: "hidden",
                            backgroundColor: "#fff",
                            marginTop: "-80px",
                            mx: "auto",
                            zIndex: 1,
                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <img
                            src={plato.image}
                            alt={plato.title}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                        {/* Icono carrito */}
                        <IconButton
                            sx={{
                                position: "absolute",
                                top: "10px",
                                right: "10px",
                                backgroundColor: "#fff",
                                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                                "&:hover": { backgroundColor: "#f1f1f1" },
                            }}
                        >
                            <ShoppingCart fontSize="small" />
                        </IconButton>
                    </Box>

                    {/* Contenido */}
                    <Box
                        sx={{
                            padding: "16px",
                            mt: "-40px", // Para alinear correctamente después de la imagen
                            textAlign: "center",
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "bold",
                                fontSize: "18px",
                                marginBottom: "8px",
                            }}
                        >
                            {plato.title}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: "#888",
                                marginBottom: "16px",
                            }}
                        >
                            {plato.category}
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "bold",
                                fontSize: "20px",
                                color: "#333",
                            }}
                        >
                            ${plato.price}
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    );
}
