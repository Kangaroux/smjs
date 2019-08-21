type URLResource = {
    name: string;
    url: string;
};

type ResourceList = {
    images: URLResource[];
};

export default <ResourceList>{
    images: [
        { name: "ArrowUp", url: "/img/arrow.png" },
        { name: "Receptor", url: "/img/receptor.png" },
        { name: "ReceptorGlow", url: "/img/receptor_glow.png" },
    ],
};
