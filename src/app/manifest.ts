import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Hôtel de Luxe Marrakech - Le Guide d'Exception",
        short_name: 'Hôtel Luxe Marrakech',
        description: "Référencement des plus beaux hôtels de luxe à Marrakech, avec une mise en avant exclusive du Palais Ronsard.",
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#bf9b30',
        icons: [
            {
                src: '/icon.png',
                sizes: '512x512',
                type: 'image/png',
            },
            {
                src: '/apple-icon.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
