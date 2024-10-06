interface ApiResponse {
    period_end: string;
    air_temp: number;
    dni: number;                   // Direct Normal Irradiance
    ghi: number;                   // Global Horizontal Irradiance
    relative_humidity: number;
    surface_pressure: number;
    wind_speed_10m: number;
    pv_power_rooftop: number;
}

// Function to fetch data from the API using fetch
const fetchData = async (url: string): Promise<ApiResponse> => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json(); // Return the fetched data
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

const main = async () => {
    const apiUrl = 'https://script.googleusercontent.com/a/macros/solink.co.za/echo?user_content_k\n' +
        'ey=mMFKILKfN4pCpe_K-ymeLawywPBjs738P70RgRcUkk3iWf3cQJDgTcVTT-m\n' +
        '8dvWBQzcntX2H1JIhcoxrCpglmQ1NLI4rTLy3OJmA1Yb3SEsKFZqtv3DaNYcMr\n' +
        'mhZHmUMi80zadyHLKCwq8y9dFH4mJT3zkIp4-K468n4RAo2RJxBnu0Hupo_T\n' +
        'OS8jmg-86IFx3v2oWP-ldoU2gapZ-4-Ov1eLHQAMkT2dtcwQHkATq_P8HS5eah\n' +
        'm695_B1e7ssetegtgkpBvh1_1BiB1RU8w4TrCMwGvcl2MsD64VxOIfL0&lib=MR_\n' +
        'mt8Wmapn2W5zwbI-xTtMWO3py5UuMP';
    try {
        const data = await fetchData(apiUrl);
        console.log('Fetched data:', data);
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
};

main();
