////////////////////////////////////////////////////////////////////////////////////////////////////

const PRODUCTOS =
[
    {
		"id": 1,
		"marca": "Harley Davidson",
		"modelo": "Softail Deluxe FLSTN",
		"anio": 2011,
		"condicion": "Usada",
		"cilindrada": 103,
		"cilindradaMedida": "ci",
		"potencia": 72,
		"kilometraje": 55000,
		"precio": 29900,
		"imagen": "img_softail_deluxe_flstn.jpg",
		"logo": "logo_harley_davidson.svg"
	},
    {
		"id": 2,
		"marca": "Harley Davidson",
		"modelo": "Sportster Forty Eight",
		"anio": 2013,
		"condicion": "Usada",
		"cilindrada": 1200,
		"cilindradaMedida": "cc",
		"potencia": 66,
		"kilometraje": 20000,
		"precio": 19900,
		"imagen": "img_sportster_forty_eight.png",
		"logo": "logo_harley_davidson.svg"
	},
    {
		"id": 3,
		"marca": "Ducati",
		"modelo": "Multistrada V4",
		"anio": 2024,
		"condicion": "Nueva",
		"cilindrada": 1158,
		"cilindradaMedida": "cc",
		"potencia": 170,
		"kilometraje": 0,
		"precio": 40900,
		"imagen": "img_multistrada_v4.png",
		"logo": "logo_ducati.png"
	},
    {
		"id": 4,
		"marca": "KTM",
		"modelo": "1190 Adventure R",
		"anio": 2015,
		"condicion": "Usada",
		"cilindrada": 1190,
		"cilindradaMedida": "cc",
		"potencia": 150,
		"kilometraje": 25000,
		"precio": 16000,
		"imagen": "img_1190_adventure_r.jpeg",
		"logo": "logo_ktm.png"
	},
    {
		"id": 5,
		"marca": "Kawasaki",
		"modelo": "ZX-10R",
		"anio": 2024,
		"condicion": "Nueva",
		"cilindrada": 998,
		"cilindradaMedida": "cc",
		"potencia": 200,
		"kilometraje": 0,
		"precio": 34990,
		"imagen": "img_zx10r.png",
		"logo": "logo_kawasaki.svg"
	},
    {
		"id": 6,
		"marca": "Husqvarna",
		"modelo": "Svartpilen 701",
		"anio": 2020,
		"condicion": "Usada",
		"cilindrada": 692,
		"cilindradaMedida": "cc",
		"potencia": 75,
		"kilometraje": 2500,
		"precio": 10900,
		"imagen": "img_svartpilen_701.jpeg",
		"logo": "logo_husqvarna.png"
	},
    {
		"id": 7,
		"marca": "BMW",
		"modelo": "M 1000R",
		"anio": 2024,
		"condicion": "Nueva",
		"cilindrada": 999,
		"cilindradaMedida": "cc",
		"potencia":  210,
		"kilometraje": 0,
		"precio": 79990,
		"imagen": "img_m1000r.jpeg",
		"logo": "logo_bmw.png"
	},
    {
		"id": 8,
		"marca": "Yamaha",
		"modelo": "MT-09",
		"anio": 2024,
		"condicion": "Nueva",
		"cilindrada": 890,
		"cilindradaMedida": "cc",
		"potencia": 120,
		"kilometraje": 0,
		"precio": 18900,
		"imagen": "img_mt09.avif",
		"logo": "logo_yamaha.png"
	},
    {
		"id": 9,
		"marca": "Triumph",
		"modelo": "Scrambler 1200 X",
		"anio": 2024,
		"condicion": "Nueva",
		"cilindrada": 1200,
		"cilindradaMedida": "cc",
		"potencia": 90,
		"kilometraje": 0,
		"precio": 38900,
		"imagen": "img_scrambler1200x.avif",
		"logo": "logo_triumph.svg"
	},
    {
		"id": 10,
		"marca": "Harley Davidson",
		"modelo": "Road Glide CVO",
		"anio": 2020,
		"condicion": "Nueva",
		"cilindrada": 117,
		"cilindradaMedida": "ci",
		"potencia": 80,
		"kilometraje": 0,
		"precio": 69900,
		"imagen": "img_road_glide_cvo.webp",
		"logo": "logo_harley_davidson.svg"
	},
    {
		"id": 11,
		"marca": "Harley Davidson",
		"modelo": "Sportster S",
		"anio": 2024,
		"condicion": "Nueva",
		"cilindrada": 76,
		"cilindradaMedida": "ci",
		"potencia": 120,
		"kilometraje": 0,
		"precio": 39900,
		"imagen": "img_sportster_s.jpeg",
		"logo": "logo_harley_davidson.svg"
	},
    {
		"id": 12,
		"marca": "Ducati",
		"modelo": "Hypermotard 950 SP",
		"anio": 2018,
		"condicion": "Usada",
		"cilindrada": 950,
		"cilindradaMedida": "cc",
		"potencia": 115,
		"kilometraje": 5850,
		"precio": 14900,
		"imagen": "img_hypermotard_950_sp.jpeg",
		"logo": "logo_ducati.png"
	},
    {
		"id": 13,
		"marca": "Ducati",
		"modelo": "Scrambler 1100 Tribute",
		"anio": 2018,
		"condicion": "Usada",
		"cilindrada": 1100,
		"cilindradaMedida": "cc",
		"potencia": 85,
		"kilometraje": 10000,
		"precio": 18900,
		"imagen": "img_scrambler_1100_tribute.jpeg",
		"logo": "logo_ducati.png"
	},
    {
		"id": 14,
		"marca": "Indian",
		"modelo": "Chief Classic",
		"anio": 2024,
		"condicion": "Nueva",
		"cilindrada": 110,
		"cilindradaMedida": "ci",
		"potencia": 80,
		"kilometraje": 0,
		"precio": 49900,
		"imagen": "img_chief_classic.jpeg",
		"logo": "logo_indian.svg"
	},
    {
		"id": 15,
		"marca": "Yamaha",
		"modelo": "YZ125",
		"anio": 2024,
		"condicion": "Nueva",
		"cilindrada": 125,
		"cilindradaMedida": "cc",
		"potencia": 35,
		"kilometraje": 0,
		"precio": 10850,
		"imagen": "img_yz125.webp",
		"logo": "logo_yamaha.png"
	},
    {
		"id": 16,
		"marca": "Husqvarna",
		"modelo": "Norden 901",
		"anio": 2022,
		"condicion": "Usada",
		"cilindrada": 901,
		"cilindradaMedida": "cc",
		"potencia": 105,
		"kilometraje": 5000,
		"precio": 15990,
		"imagen": "img_norden_901.jpeg",
		"logo": "logo_husqvarna.png"
	},
    {
		"id": 17,
		"marca": "Husqvarna",
		"modelo": "Enduro 701",
		"anio": 2024,
		"condicion": "Nueva",
		"cilindrada": 701,
		"cilindradaMedida": "cc",
		"potencia": 75,
		"kilometraje": 0,
		"precio": 10990,
		"imagen": "img_enduro_701.webp",
		"logo": "logo_husqvarna.png"
	},
    {
		"id": 18,
		"marca": "Husqvarna",
		"modelo": "Viptilen 401",
		"anio": 2018,
		"condicion": "Usada",
		"cilindrada": 401,
		"cilindradaMedida": "cc",
		"potencia": 45,
		"kilometraje": 8500,
		"precio": 6900,
		"imagen": "img_viptilen_401.avif",
		"logo": "logo_husqvarna.png"
	},
    {
		"id": 19,
		"marca": "Yamaha",
		"modelo": "XSR900",
		"anio": 2020,
		"condicion": "Usada",
		"cilindrada": 900,
		"cilindradaMedida": "cc",
		"potencia": 115,
		"kilometraje": 500,
		"precio": 20900,
		"imagen": "img_xsr900.avif",
		"logo": "logo_yamaha.png"
	},
    {
		"id": 20,
		"marca": "Yamaha",
		"modelo": "Jog",
		"anio": 1990,
		"condicion": "Usada",
		"cilindrada": 45,
		"cilindradaMedida": "cc",
		"potencia": 4.5,
		"kilometraje": 25000,
		"precio": 1090,
		"imagen": "img_jog.webp",
		"logo": "logo_yamaha.png"
	},
    {
		"id": 22,
		"marca": "Harley Davidson",
		"modelo": "Tri Glide Ultra",
		"anio": 2024,
		"condicion": "Nueva",
		"cilindrada": 114,
		"cilindradaMedida": "ci",
		"potencia": 90,
		"kilometraje": 0,
		"precio": 59900,
		"imagen": "img_tri_glide_ultra.webp",
		"logo": "logo_harley_davidson.svg"
	},
    {
		"id": 23,
		"marca": "Ducati",
		"modelo": "Panigale V4",
		"anio": 2024,
		"condicion": "Nueva",
		"cilindrada": 1100,
		"cilindradaMedida": "cc",
		"potencia": 210,
		"kilometraje": 0,
		"precio": 49900,
		"imagen": "img_panigale_v4.webp",
		"logo": "logo_ducati.png"
	},
    {
		"id": 24,
		"marca": "Ducati",
		"modelo": "DesertX",
		"anio": 2022,
		"condicion": "Usada",
		"cilindrada": 937,
		"cilindradaMedida": "cc",
		"potencia": 110,
		"kilometraje": 10000,
		"precio": 27900,
		"imagen": "img_desertx.webp",
		"logo": "logo_ducati.png"
	},
	{
		"id": 25,
		"marca": "Ducati",
		"modelo": "XDiavel",
		"anio": 2018,
		"condicion": "Usada",
		"cilindrada": 1262,
		"cilindradaMedida": "cc",
		"potencia": 150,
		"kilometraje": 25000,
		"precio": 25900,
		"imagen": "img_xdiavel.png",
		"logo": "logo_ducati.png"
	},
	{
		"id": 26,
		"marca": "Harley Davidson",
		"modelo": "Fat Boy",
		"anio": 2003,
		"condicion": "Usada",
		"cilindrada": 1450,
		"cilindradaMedida": "cc",
		"potencia": 65,
		"kilometraje": 55000,
		"precio": 20900,
		"imagen": "img_fat_boy.jpeg",
		"logo": "logo_harley_davidson.svg"
	},
	{
		"id": 27,
		"marca": "Harley Davidson",
		"modelo": "Pan America",
		"anio": 2024,
		"condicion": "Nueva",
		"cilindrada": 1250,
		"cilindradaMedida": "cc",
		"potencia": 150,
		"kilometraje": 0,
		"precio": 32900,
		"imagen": "img_pan_america.png",
		"logo": "logo_harley_davidson.svg"
	},
	{
		"id": 28,
		"marca": "BMW",
		"modelo": "R 1200 GS Adventure",
		"anio": 2024,
		"condicion": "Nueva",
		"cilindrada": 1200,
		"cilindradaMedida": "cc",
		"potencia": 125,
		"kilometraje": 0,
		"precio": 49900,
		"imagen": "img_r1200_gs_adventure.jpeg",
		"logo": "logo_bmw.png"
	},
	{
		"id": 29,
		"marca": "BMW",
		"modelo": "S1000 RR",
		"anio": 2020,
		"condicion": "Usada",
		"cilindrada": 1000,
		"cilindradaMedida": "cc",
		"potencia": 205,
		"kilometraje": 15000,
		"precio": 29900,
		"imagen": "img_s1000_rr.avif",
		"logo": "logo_bmw.png"
	},
	{
		"id": 30,
		"marca": "BMW",
		"modelo": "CE 04",
		"anio": 2024,
		"condicion": "Nueva",
		"cilindrada": 0,
		"cilindradaMedida": "-",
		"potencia": 20,
		"kilometraje": 0,
		"precio": 19900,
		"imagen": "img_ce_04.webp",
		"logo": "logo_bmw.png"
	},
	{
		"id": 31,
		"marca": "Husqvarna",
		"modelo": "FC 450",
		"anio": 2024,
		"condicion": "Nueva",
		"cilindrada": 450,
		"cilindradaMedida": "cc",
		"potencia": 60,
		"kilometraje": 0,
		"precio": 17900,
		"imagen": "img_fc_450.png",
		"logo": "logo_husqvarna.png"
	},
	{
		"id": 32,
		"marca": "Husqvarna",
		"modelo": "Vitpilen 701",
		"anio": 2018,
		"condicion": "Usada",
		"cilindrada": 692,
		"cilindradaMedida": "cc",
		"potencia": 75,
		"kilometraje": 15000,
		"precio": 12900,
		"imagen": "img_vitpilen_701.jpeg",
		"logo": "logo_husqvarna.png"
	},
	{
		"id": 33,
		"marca": "Kawasaki",
		"modelo": "Z900 RS",
		"anio": 2020,
		"condicion": "Usada",
		"cilindrada": 900,
		"cilindradaMedida": "cc",
		"potencia": 110,
		"kilometraje": 12500,
		"precio": 18900,
		"imagen": "img_z900_rs.png",
		"logo": "logo_kawasaki.svg"
	},
	{
		"id": 34,
		"marca": "Kawasaki",
		"modelo": "KX450",
		"anio": 2022,
		"condicion": "Usada",
		"cilindrada": 450,
		"cilindradaMedida": "cc",
		"potencia": 55,
		"kilometraje": 1500,
		"precio": 12900,
		"imagen": "img_kx450.png",
		"logo": "logo_kawasaki.svg"
	},
	{
		"id": 35,
		"marca": "Kawasaki",
		"modelo": "ZX6-R",
		"anio": 2010,
		"condicion": "Usada",
		"cilindrada": 600,
		"cilindradaMedida": "cc",
		"potencia": 130,
		"kilometraje": 1500,
		"precio": 10900,
		"imagen": "img_zx6r.jpeg",
		"logo": "logo_kawasaki.svg"
	},
	{
		"id": 36,
		"marca": "KTM",
		"modelo": "1290 Super Adventure R",
		"anio": 2024,
		"condicion": "Nueva",
		"cilindrada": 1290,
		"cilindradaMedida": "cc",
		"potencia": 160,
		"kilometraje": 0,
		"precio": 40900,
		"imagen": "img_1290_super_adventure_r.jpeg",
		"logo": "logo_ktm.png"
	},
	{
		"id": 37,
		"marca": "KTM",
		"modelo": "1290 Super Duke R",
		"anio": 2024,
		"condicion": "Nueva",
		"cilindrada": 1290,
		"cilindradaMedida": "cc",
		"potencia": 180,
		"kilometraje": 0,
		"precio": 30900,
		"imagen": "img_1290_super_duke_r.png",
		"logo": "logo_ktm.png"
	},
	{
		"id": 38,
		"marca": "Indian",
		"modelo": "Challenger Elite",
		"anio": 2022,
		"condicion": "Nueva",
		"cilindrada": 108,
		"cilindradaMedida": "ci",
		"potencia": 120,
		"kilometraje": 0,
		"precio": 50900,
		"imagen": "img_challenger_elite.png",
		"logo": "logo_indian.svg"
	},
	{
		"id": 39,
		"marca": "Indian",
		"modelo": "FTR Rally",
		"anio": 2022,
		"condicion": "Nueva",
		"cilindrada": 75,
		"cilindradaMedida": "ci",
		"potencia": 120,
		"kilometraje": 0,
		"precio": 35900,
		"imagen": "img_ftr_rally.jpeg",
		"logo": "logo_indian.svg"
	},
	{
		"id": 40,
		"marca": "Triumph",
		"modelo": "Rocket 3 GT",
		"anio": 2022,
		"condicion": "Usada",
		"cilindrada": 2500,
		"cilindradaMedida": "cc",
		"potencia": 165,
		"kilometraje": 16500,
		"precio": 35900,
		"imagen": "img_rocket_3_gt.png",
		"logo": "logo_triumph.svg"
	},
	{
		"id": 41,
		"marca": "Triumph",
		"modelo": "Tiger 1200 Rally Pro",
		"anio": 2024,
		"condicion": "Nueva",
		"cilindrada": 1200,
		"cilindradaMedida": "cc",
		"potencia": 105,
		"kilometraje": 0,
		"precio": 29900,
		"imagen": "img_tiger_1200_rally_pro.avif",
		"logo": "logo_triumph.svg"
	},
	{
		"id": 42,
		"marca": "Triumph",
		"modelo": "Thruxton RS",
		"anio": 2020,
		"condicion": "Usada",
		"cilindrada": 1200,
		"cilindradaMedida": "cc",
		"potencia": 100,
		"kilometraje": 900,
		"precio": 29900,
		"imagen": "img_thruxton_rs.avif",
		"logo": "logo_triumph.svg"
	},
	{
		"id": 43,
		"marca": "Ducati",
		"modelo": "Monster 1100 EVO",
		"anio": 2020,
		"condicion": "Usada",
		"cilindrada": 1100,
		"cilindradaMedida": "cc",
		"potencia": 100,
		"kilometraje": 40000,
		"precio": 12900,
		"imagen": "img_monster_1100_evo.webp",
		"logo": "logo_ducati.png"
	},
	{
		"id": 44,
		"marca": "Indian",
		"modelo": "Scout Bobber",
		"anio": 2020,
		"condicion": "Usada",
		"cilindrada": 70,
		"cilindradaMedida": "ci",
		"potencia": 100,
		"kilometraje": 8000,
		"precio": 22900,
		"imagen": "img_scout.jpeg",
		"logo": "logo_indian.svg"
	},
	{
		"id": 45,
		"marca": "KTM",
		"modelo": "125 SX",
		"anio": 2024,
		"condicion": "Nueva",
		"cilindrada": 125,
		"cilindradaMedida": "cc",
		"potencia": 30,
		"kilometraje": 0,
		"precio": 10900,
		"imagen": "img_sx_125.png",
		"logo": "logo_ktm.png"
	},
	{
		"id": 46,
		"marca": "KTM",
		"modelo": "RC 200",
		"anio": 2024,
		"condicion": "Nueva",
		"cilindrada": 200,
		"cilindradaMedida": "cc",
		"potencia": 25,
		"kilometraje": 0,
		"precio": 6900,
		"imagen": "img_rc_200.png",
		"logo": "logo_ktm.png"
	},
	{
		"id": 47,
		"marca": "Triumph",
		"modelo": "Bonneville T120",
		"anio": 2019,
		"condicion": "Usada",
		"cilindrada": 1200,
		"cilindradaMedida": "cc",
		"potencia": 80,
		"kilometraje": 8500,
		"precio": 26900,
		"imagen": "img_bonneville_t120.webp",
		"logo": "logo_triumph.svg"
	},
	{
		"id": 48,
		"marca": "Harley Davidson",
		"modelo": "Road King Classic",
		"anio": 2015,
		"condicion": "Usada",
		"cilindrada": 103,
		"cilindradaMedida": "ci",
		"potencia": 72,
		"kilometraje": 50000,
		"precio": 34900,
		"imagen": "img_road_king_classic.jpeg",
		"logo": "logo_harley_davidson.svg"
	},
	{
		"id": 49,
		"marca": "Harley Davidson",
		"modelo": "Sportster Seventy Two",
		"anio": 2018,
		"condicion": "Usada",
		"cilindrada": 1200,
		"cilindradaMedida": "cc",
		"potencia": 55,
		"kilometraje": 7500,
		"precio": 20900,
		"imagen": "img_sportster_seventy_two.jpeg",
		"logo": "logo_harley_davidson.svg"
	}
]

////////////////////////////////////////////////////////////////////////////////////////////////////

const main = document.getElementById('main')

// HEADER.
const HEADER = document.createElement('header')
HEADER.className += 'bg-white border-b fixed w-full z-50'
HEADER.innerHTML += `
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
            <a href="#" class="-m-1.5 p-1.5">
                <span class="text-sm md:text-lg text-gray-900 font-semibold">Federico Márquez Lucas</span>
            </a>
        </div>
		
		<!-- START : SHOPPING CART SLIDE-OVER -->
		<div x-data="{ openSlideOver: false }">
			<button x-on:click="openSlideOver = true" class="relative">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
					<path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clip-rule="evenodd" />
				</svg>
				<span id="shoppingCartCount" class="absolute top-[-67.5%] right-[-67.5%] flex items-center justify-center rounded-full border w-6 h-6 bg-purple-100 text-xs text-purple-700 font-semibold"></span>
			</button>
			<div @keydown.window.escape="openSlideOver = false" x-show="openSlideOver" class="relative z-10" aria-labelledby="slide-over-title" x-ref="dialog" aria-modal="true">
				<div x-show="openSlideOver" x-transition:enter="ease-in-out duration-500" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="ease-in-out duration-500" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" x-description="Background backdrop, show/hide based on slide-over state." class="fixed inset-0 bg-gray-700 bg-opacity-80 transition-opacity"></div>
				<!-- <div x-show="openSlideOver" @click.away="openSlideOver = false" x-transition:enter="ease-in-out duration-500" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="ease-in-out duration-500" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" x-description="Background backdrop, show/hide based on slide-over state." class="fixed inset-0 bg-gray-700 bg-opacity-80 transition-opacity"></div> -->
				<div class="fixed inset-0 overflow-hidden">
					<div class="absolute inset-0 overflow-hidden">
						<div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
							<div x-show="openSlideOver" x-transition:enter="transform transition ease-in-out duration-500 sm:duration-700" x-transition:enter-start="translate-x-full" x-transition:enter-end="translate-x-0" x-transition:leave="transform transition ease-in-out duration-500 sm:duration-700" x-transition:leave-start="translate-x-0" x-transition:leave-end="translate-x-full" class="pointer-events-auto w-screen max-w-md sm:max-w-lg" x-description="Slide-over panel, show/hide based on slide-over state.">
								<div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
									<div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
										<div class="flex items-start justify-between">
											<h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Carrito de Compras</h2>
											<div class="ml-3 flex h-7 items-center">
												<button type="button" class="relative -m-2 p-2 text-gray-400 hover:text-gray-500" @click="openSlideOver = false">
													<span class="absolute -inset-0.5"></span>
													<span class="sr-only">Close panel</span>
													<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
														<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
													</svg>
												</button>
											</div>
										</div>
										<div class="mt-8">
											<div class="flow-root">
												<ul role="list" class="-my-6 divide-y divide-gray-200" id="listado-productos-shopping-cart"></ul>
											</div>
										</div>
									</div>
									<div class="border-t border-gray-200 px-4 py-6 sm:px-6">
										<div class="flex justify-between text-base font-medium text-gray-900">
											<p>Total</p>
											<p class="font-bold text-gray-900" id="shopping-cart-total"></p>
										</div>
										<div class="mt-3 flex items-center justify-between text-center text-sm text-gray-500">
											<button type="button" class="font-medium text-indigo-600 hover:text-indigo-500" @click="openSlideOver = false" id="botonLimpiarCarrito">Limpiar Carrito</button>
											<button type="button" class="font-medium text-indigo-600 hover:text-indigo-500" @click="openSlideOver = false"> Continuar Comprando <span aria-hidden="true"> →</span></button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- END : SHOPPING CART SLIDE-OVER -->

    </nav>
`

// SECTION HEADING.
const SECTIONHEADING = document.createElement('div')
SECTIONHEADING.className += 'bg-white pt-[80px]'
SECTIONHEADING.innerHTML += `
    <div class="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-14 lg:px-8">
        <div class="md:flex md:items-center md:justify-between">
            <div class="min-w-0 flex-1">
                <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Listado de Productos</h2>
            </div>
            <div class="mt-4 flex items-center gap-4 md:ml-4 md:mt-0">

                <span class="text-sm text-gray-700 font-normal">
                    <b id="resultados-productos"></b>
                    <span id="resultado"></span>
                </span>

                <!-- START : DISPLAY SELECTOR -->
                <span class="isolate hidden lg:inline-flex rounded-md shadow-sm">
                    <button type="button" id="display-table-button" class="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                        </svg>
                    </button>
                    <button type="button" id="display-grid-button" class="relative -ml-px inline-flex items-center rounded-r-md bg-gray-200 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-200 focus:z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z" />
                        </svg>
                    </button>
                </span>
                <!-- END : DISPLAY SELECTOR -->

            </div>
        </div>

        <!-- START : PRODUCTS FILTERS -->
        <div class="mt-7 pt-7 border-t">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-y-5">
                <div class="flex flex-col sm:flex-row gap-y-5 sm:items-center justify-between md:space-x-8">

                    <!-- DROPDOWN FILTERS -->
                    <div class="flex items-center space-x-2">
                        <h3 class="text-xs text-gray-700 font-bold">Filtrar:</h3>
                        <div class="relative inline-block text-left" id="labelFiltroMarca" x-data="{ open: false }">
                            <div>
                                <button type="button" x-on:click="open = true" class="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                    Marca
                                    <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            <div x-show="open" x-on:click.away="open = false" class="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                <div class="p-5" role="none">
                                    <fieldset>
                                        <legend class="sr-only">Marca</legend>
                                        <div class="space-y-2">
                                            <div class="flex items-center">
                                                <input id="BMW" value="BMW" name="filtro-marca" type="radio" class="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                                <label for="BMW" class="ml-2 cursor-pointer block text-xs font-medium leading-6 text-gray-900">BMW</label>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="Ducati" value="Ducati" name="filtro-marca" type="radio" class="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                                <label for="Ducati" class="ml-2 cursor-pointer block text-xs font-medium leading-6 text-gray-900">Ducati</label>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="Harley Davidson" value="Harley Davidson" name="filtro-marca" type="radio" class="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                                <label for="Harley Davidson" class="ml-2 cursor-pointer block text-xs font-medium leading-6 text-gray-900">Harley Davidson</label>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="Husqvarna" value="Husqvarna" name="filtro-marca" type="radio" class="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                                <label for="Husqvarna" class="ml-2 cursor-pointer block text-xs font-medium leading-6 text-gray-900">Husqvarna</label>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="Indian" value="Indian" name="filtro-marca" type="radio" class="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                                <label for="Indian" class="ml-2 cursor-pointer block text-xs font-medium leading-6 text-gray-900">Indian</label>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="Kawasaki" value="Kawasaki" name="filtro-marca" type="radio" class="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                                <label for="Kawasaki" class="ml-2 cursor-pointer block text-xs font-medium leading-6 text-gray-900">Kawasaki</label>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="KTM" value="KTM" name="filtro-marca" type="radio" class="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                                <label for="KTM" class="ml-2 cursor-pointer block text-xs font-medium leading-6 text-gray-900">KTM</label>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="Triumph" value="Triumph" name="filtro-marca" type="radio" class="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                                <label for="Triumph" class="ml-2 cursor-pointer block text-xs font-medium leading-6 text-gray-900">Triumph</label>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="Yamaha" value="Yamaha" name="filtro-marca" type="radio" class="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                                <label for="Yamaha" class="ml-2 cursor-pointer block text-xs font-medium leading-6 text-gray-900">Yamaha</label>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                        <div class="relative inline-block text-left" id="labelFiltroCondicion" x-data="{ open: false }">
                            <div>
                                <button type="button" x-on:click="open = true" class="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                    Condición
                                    <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            <div x-show="open" x-on:click.away="open = false" class="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                <div class="p-5" role="none">
                                    <fieldset>
                                        <legend class="sr-only">Condición</legend>
                                        <div class="space-y-2">
                                            <div class="flex items-center">
                                                <input id="Nueva" value="Nueva" name="filtro-condicion" type="radio" class="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                                <label for="Nueva" class="ml-2 cursor-pointer block text-xs font-medium leading-6 text-gray-900">Nueva</label>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="Usada" value="Usada" name="filtro-condicion" type="radio" class="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                                <label for="Usada" class="ml-2 cursor-pointer block text-xs font-medium leading-6 text-gray-900">Usada</label>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- SORTING BUTTONS -->
                    <div class="flex items-center space-x-2">
                        <h3 class="text-xs text-gray-700 font-bold">Ordenar:</h3>
                        <button type="button" id="ordenarPrecioAsc" class="inline-flex items-center gap-x-1.5 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
							Precio
							<svg class="-mr-0.5 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
								<path fill-rule="evenodd" d="M2.25 4.5A.75.75 0 0 1 3 3.75h14.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm0 4.5A.75.75 0 0 1 3 8.25h9.75a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9Zm15-.75A.75.75 0 0 1 18 9v10.19l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 1 1 1.06-1.06l2.47 2.47V9a.75.75 0 0 1 .75-.75Zm-15 5.25a.75.75 0 0 1 .75-.75h9.75a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
							</svg>
						</button>
                        <button type="button" id="ordenarPrecioDes" class="inline-flex items-center gap-x-1.5 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
							Precio
							<svg class="-mr-0.5 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
								<path fill-rule="evenodd" d="M2.25 4.5A.75.75 0 0 1 3 3.75h14.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm14.47 3.97a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 1 1-1.06 1.06L18 10.81V21a.75.75 0 0 1-1.5 0V10.81l-2.47 2.47a.75.75 0 1 1-1.06-1.06l3.75-3.75ZM2.25 9A.75.75 0 0 1 3 8.25h9.75a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9Zm0 4.5a.75.75 0 0 1 .75-.75h5.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
							</svg>						  
						</button>
                        <button type="button" id="ordenarReciente" class="inline-flex items-center gap-x-1 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
							Recientes
							<svg class="-mr-0.5 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
							</svg>
						</button>
                    </div>

                </div>

                <!-- CLEAR FILTERS BUTTON -->
                <div class="flex items-start">
                    <button type="button" id="borrarFiltros" class="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Borrar Filtros</button>
                </div>
            </div>
        </div>
        <!-- END : PRODUCTS FILTERS -->

    </div>
`

// PRODUCT LISTING.
const PRODUCTLISTING = document.createElement('div')
PRODUCTLISTING.className += 'bg-white'
PRODUCTLISTING.innerHTML += `
    <div x-data="{ modelOpen: false }">
        <div class="mx-auto max-w-7xl px-4 py-8 sm:py-16 sm:px-6 sm:pb-14 sm:pt-0 lg:px-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 lg:gap-x-8" id="listado-productos"></div>
        </div>
        <div id="modal-producto"></div>
    </div>
`

// FOOTER.
const FOOTER = document.createElement('footer')
FOOTER.className += 'bg-white rounded-lg shadow m-4 dark:bg-gray-900'
FOOTER.innerHTML += `
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 dark:text-white sm:text-center dark:text-gray-400">
            Federico Márquez Lucas | Entregable #2 - JavaScript Flex | 61990
        </span>
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            <a class="hover:underline" href="https://www.coderhouse.com/uy/?pipe_source=google&pipe_medium=cpc&pipe_campaign=0&gad_source=1&gclid=Cj0KCQjw6auyBhDzARIsALIo6v9l7bHL_O3jaqmlONYACs5FljtgMbhUe_bhweq1ZEhh0sasjxGiRMsaAqCtEALw_wcB" target="_blank" title="CODERHOUSE">
                <img src="./img/logo-img/CODERHOUSE_Logo.svg" alt="CODERHOUSE" class="w-auto h-[15px]">
            </a>
        </span>
    </div>
`

main.append(HEADER)
main.append(SECTIONHEADING)
main.append(PRODUCTLISTING)
main.append(FOOTER)

////////////////////////////////////////////////////////////////////////////////////////////////////

const numeroFormateado = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

////////////////////////////////////////////////////////////////////////////////////////////////////

// SWITCH DISPLAY LISTADO DE PRODUCTOS ( GRID / TABLE ).
// ACTIVE / INACTIVE STATE DE CADA BOTÓN.

const buttonInactiveClasses = ['bg-white', 'hover:bg-gray-50']
const buttonActiveClasses = ['bg-gray-200', 'hover:bg-gray-200']

const toggleDisplay = (activeButtonId, inactiveButtonId, removeClass, addClass) => {
    document.getElementById('listado-productos').classList.replace(removeClass, addClass);
    ['remove', 'add'].forEach((method, i) => {
        document.getElementById(activeButtonId).classList[method](...(i ? buttonActiveClasses : buttonInactiveClasses));
        document.getElementById(inactiveButtonId).classList[method](...(i ? buttonInactiveClasses : buttonActiveClasses));
    });
};

document.getElementById('display-table-button').addEventListener('click', () => {
    toggleDisplay('display-table-button', 'display-grid-button', 'lg:grid-cols-3', 'lg:grid-cols-2');
});

document.getElementById('display-grid-button').addEventListener('click', () => {
    toggleDisplay('display-grid-button', 'display-table-button', 'lg:grid-cols-2', 'lg:grid-cols-3');
});

////////////////////////////////////////////////////////////////////////////////////////////////////

const sortButtonInactiveClasses = ['bg-white', 'hover:bg-gray-50', 'font-semibold']
const sortButtonActiveClasses = ['bg-gray-200', 'hover:bg-gray-200', 'font-bold']

function toggleSortButtonClasses (buttonId, removeClasses, addClasses) {
    const button = document.getElementById(buttonId)
    button.classList.remove(...removeClasses)
    button.classList.add(...addClasses)
}

////////////////////////////////////////////////////////////////////////////////////////////////////

function toggleRadioButtonsMarca () {
    const radioButtonsMarca = document.querySelectorAll('input[name="filtro-marca"]')
    arrayRadioButtonsMarca = Array.from(radioButtonsMarca)
    arrayRadioButtonsMarca.forEach(button => button.checked = false)
}

function toggleRadioButtonsCondicion () {
    const radioButtonsCondicion = document.querySelectorAll('input[name="filtro-condicion"]')
    arrayRadioButtonsCondicion = Array.from(radioButtonsCondicion)
    arrayRadioButtonsCondicion.forEach(button => button.checked = false)
}

////////////////////////////////////////////////////////////////////////////////////////////////////

// DISPLAY DE CANTIDAD DE RESULTADOS.
const displayDeResultados = array => {
    document.querySelector('#resultados-productos').innerText = array.length
    let resultado = document.querySelector('#resultado')
    array.length > 1 ? resultado.innerText = 'Motos' : resultado.innerText = 'Moto'
}

////////////////////////////////////////////////////////////////////////////////////////////////////

// LISTADO DE PRODUCTOS.
const cargaGrillaDeProductos = (array, restoreStorage) => {
    displayDeResultados(array)
    let contenedor = document.querySelector('#listado-productos')
    let listadoProductos = ''

    for (const producto of array) {

        producto.kilometraje == '0' ? kilometrajeFormateado = '0km.' : kilometrajeFormateado = numeroFormateado(`${producto.precio}kms.`)
        producto.condicion == 'Nueva' ? nuevaBadge = '<span class="absolute top-3 right-3 items-center rounded-full bg-purple-100 px-2.5 py-1.5 text-xs font-semibold text-purple-700">NUEVA</span>' : nuevaBadge = '<span class="sr-only"></span>'

        listadoProductos += `
            <div class="group">
                <div class="cursor-pointer aspect-square relative flex items-center justify-center border aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7" onclick="triggerModal(${producto.id})" @click="modelOpen =! modelOpen">
                    <img src="./img/product-img/${producto.imagen}" class="w-full h-auto object-cover object-center px-4 group-hover:opacity-75">
                    ${nuevaBadge}
                </div>
                <h3 class="mt-4 text-sm text-gray-700">
                    ${producto.marca}
                    <b>${producto.modelo}</b>
                </h3>
                <h5 class="mt-0 text-xs text-gray-500">
                    ${producto.anio} | ${producto.cilindrada}${producto.cilindradaMedida} | ${kilometrajeFormateado}
                </h5>
				<div class="flex items-center justify-between mt-2.5">
					<p class="text-lg font-semibold text-gray-900">
						USD ${numeroFormateado(`${producto.precio}`)}
					</p>
					<button type="button" onclick="addToCart(${producto.id});animarCartCount()" class="rounded-full bg-indigo-600 px-2.5 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
						Add To Cart
					</button>
				</div>
            </div>
        `
    }

    array.length > 0 ? contenedor.innerHTML = listadoProductos : contenedor.innerHTML = `<h3 class="text-xs text-center	font-semibold text-red-500 col-span-3">- NO EXISTEN COINCIDENCIAS -</h3>`

    restoreStorage ? localStorage.setItem('PRODUCTOS', JSON.stringify(PRODUCTOS)) : localStorage.setItem('PRODUCTOS', JSON.stringify(array))
}

cargaGrillaDeProductos(PRODUCTOS, false)

////////////////////////////////////////////////////////////////////////////////////////////////////

// ARRAY FILTRADO POR MARCA.
const filtrarPorMarca = marca => {
    const arrayFiltradoPorMarca = JSON.parse(localStorage.getItem('PRODUCTOS')).filter(producto => producto.marca == marca)
    cargaGrillaDeProductos(arrayFiltradoPorMarca, false)
    localStorage.setItem('PRODUCTOS', JSON.stringify(PRODUCTOS))
}

// FILTRO POR MARCA CADA VEZ QUE SELECCIONAN UN FILTRO DISPONIBLE.
let marcaFiltradaActiva = ''
const radioButtonsMarca = document.querySelectorAll('input[name="filtro-marca"]')
arrayRadioButtonsMarca = Array.from(radioButtonsMarca)
arrayRadioButtonsMarca.forEach(button => {
    button.addEventListener('change', () => {
        if (button.checked) {
            filtrarPorMarca(button.value)
            marcaFiltradaActiva = button.value
            toggleSortButtonClasses('ordenarPrecioAsc', sortButtonActiveClasses, sortButtonInactiveClasses)
            toggleSortButtonClasses('ordenarPrecioDes', sortButtonActiveClasses, sortButtonInactiveClasses)
            toggleSortButtonClasses('ordenarReciente', sortButtonActiveClasses, sortButtonInactiveClasses)
            toggleRadioButtonsCondicion()
        }
    })
})

// MUESTRO LA CANTIDAD DE RESULTADOS POR MARCA EN CADA OPCIÓN DEL FILTRO.
productosReducidosPorMarca = JSON.parse(localStorage.getItem('PRODUCTOS'))

const agrupadoPorMarca = productosReducidosPorMarca.reduce((acc, item) => {
    acc[item.marca] = (acc[item.marca] || 0) + 1
    return acc
}, {})

const labelsMarca = document.querySelectorAll('#labelFiltroMarca label')
labelsMarca.forEach(label => {
    const marca = label.getAttribute('for')
    const contador = agrupadoPorMarca[marca] || 0
    label.textContent += ` (${contador})`
})

////////////////////////////////////////////////////////////////////////////////////////////////////

// FILTRO POR CONDICIÓN EL ARRAY RECIBIDO LUEGO DE FILTRARLO POR MARCA ACTIVA.
const filtrarPorCondicion = condicion => {
    const arrayFiltradoPorCondicion = []
    
    if (marcaFiltradaActiva) JSON.parse(localStorage.getItem('PRODUCTOS')).filter(producto => producto.marca == marcaFiltradaActiva).filter(producto => producto.condicion == condicion).forEach(producto => arrayFiltradoPorCondicion.push(producto))
    else PRODUCTOS.filter(producto => producto.condicion == condicion).forEach(producto => arrayFiltradoPorCondicion.push(producto))

    cargaGrillaDeProductos(arrayFiltradoPorCondicion, true)
}

const radioButtonsCondicion = document.querySelectorAll('input[name="filtro-condicion"]')
arrayRadioButtonsCondicion = Array.from(radioButtonsCondicion)
arrayRadioButtonsCondicion.forEach(button => {
    button.addEventListener('change', () => {
        if (button.checked) {
            filtrarPorCondicion(button.value)
            toggleSortButtonClasses('ordenarPrecioAsc', sortButtonActiveClasses, sortButtonInactiveClasses)
            toggleSortButtonClasses('ordenarPrecioDes', sortButtonActiveClasses, sortButtonInactiveClasses)
            toggleSortButtonClasses('ordenarReciente', sortButtonActiveClasses, sortButtonInactiveClasses)
        }
    })
})

////////////////////////////////////////////////////////////////////////////////////////////////////

/*
    - GENERO Y RENDERIZO NUEVO ARRAY DE PRODUCTOS SORTEADO POR PARÁMETRO SELECCIONADO.
    - VUELVO A SETEAR EL ARRAY EN LOCALSTORAGE PARA SER LEVANTADO POR LA ACCIÓN FILTRAR.
    - CAMBIO LAS CLASES ACTIVAS/INACTIVAS DEL BOTÓN SELECCIONADO.
*/

const sortListadoProductos = sort => {
    const arrayProductosOrdenados = []
    
    if (marcaFiltradaActiva) JSON.parse(localStorage.getItem('PRODUCTOS')).filter(producto => producto.marca == marcaFiltradaActiva).forEach(producto => arrayProductosOrdenados.push(producto))
    else PRODUCTOS.forEach(producto => arrayProductosOrdenados.push(producto))

    if (sort == 'precioAsc') arrayProductosOrdenados.sort((param1, param2) => param1.precio - param2.precio)
    else if (sort == 'precioDes') arrayProductosOrdenados.sort((param1, param2) => param2.precio - param1.precio)
    else if (sort == 'reciente') arrayProductosOrdenados.reverse()

    cargaGrillaDeProductos(arrayProductosOrdenados, true)
}

const sortButton = (activeButtonId, inactiveButtonId, inactiveButtonIdTwo) => {
    ['remove', 'add'].forEach((method, i) => {
        document.getElementById(activeButtonId).classList[method](...(i ? sortButtonActiveClasses : sortButtonInactiveClasses))
        document.getElementById(inactiveButtonId).classList[method](...(i ? sortButtonInactiveClasses : sortButtonActiveClasses))
        document.getElementById(inactiveButtonIdTwo).classList[method](...(i ? sortButtonInactiveClasses : sortButtonActiveClasses))
    })
}

document.getElementById('ordenarPrecioAsc').addEventListener('click', () => {
    sortButton('ordenarPrecioAsc', 'ordenarPrecioDes', 'ordenarReciente')
    sortListadoProductos('precioAsc')
})

document.getElementById('ordenarPrecioDes').addEventListener('click', () => {
    sortButton('ordenarPrecioDes', 'ordenarPrecioAsc', 'ordenarReciente')
    sortListadoProductos('precioDes')
})

document.getElementById('ordenarReciente').addEventListener('click', () => {
    sortButton('ordenarReciente', 'ordenarPrecioAsc', 'ordenarPrecioDes')
    sortListadoProductos('reciente')
})

////////////////////////////////////////////////////////////////////////////////////////////////////

/*
    - GENERO LISTADO INICIAL SIN FILTROS APLICADOS.
    - REMUEVO/RESETEADO ESTADOS INICIALES A ELEMENTOS RELACIONADOS CON LOS FILTROS.
*/

document.getElementById('borrarFiltros').addEventListener('click', () => listadoProductos())

const listadoProductos = () => {
    toggleRadioButtonsMarca()
    toggleRadioButtonsCondicion()

    toggleSortButtonClasses('ordenarPrecioAsc', sortButtonActiveClasses, sortButtonInactiveClasses)
    toggleSortButtonClasses('ordenarPrecioDes', sortButtonActiveClasses, sortButtonInactiveClasses)
    toggleSortButtonClasses('ordenarReciente', sortButtonActiveClasses, sortButtonInactiveClasses)

    localStorage.removeItem('PRODUCTOS')
    localStorage.setItem('PRODUCTOS', JSON.stringify(PRODUCTOS))
    cargaGrillaDeProductos(PRODUCTOS, false)
}

////////////////////////////////////////////////////////////////////////////////////////////////////

/*
    - GENERO EL MODAL CONTENT A PARTIR DEL ID RECIBIDO EN LA FUNCIÓN.
    - TRAIGO EL ARRAY DE PRODUCTOS ALMACENADOS EN LOCALSTORAGE COMO STRING.
*/

const triggerModal = productoId => {
    const productoDetalleModal = PRODUCTOS.find(producto => producto.id === productoId)
    productoDetalleModal.kilometraje == '0' ? kilometrajeFormateado = '0km.' : kilometrajeFormateado = numeroFormateado(`${productoDetalleModal.precio}kms.`)
    productoDetalleModal.condicion == 'Nueva' ? nuevaBadge = '<span class="absolute top-0 right-0 items-center rounded-full bg-purple-100 px-2.5 py-1.5 text-xs font-semibold text-purple-700">NUEVA</span>' : nuevaBadge = '<span class="sr-only"></span>'

    let contenedorModal = document.querySelector('#modal-producto')
    let modalProducto = `
        <div x-show="modelOpen" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="flex items-end justify-center min-h-screen px-4 text-center md:items-center sm:block sm:p-0">
                <div x-cloak @click="modelOpen = false" x-show="modelOpen" x-transition:enter="transition ease-out duration-300 transform" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition ease-in duration-200 transform" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" class="fixed inset-0 transition-opacity bg-gray-700 bg-opacity-80" aria-hidden="true"></div>
                <div x-cloak x-show="modelOpen" x-transition:enter="transition ease-out duration-300 transform" x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100" x-transition:leave="transition ease-in duration-200 transform" x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100" x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" class="inline-block w-full max-w-xl my-20 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl 2xl:max-w-2xl">
                    <div class="flex items-center justify-between space-x-4 bg-gray-100 p-8">
                        <div class="flex items-center gap-2">
                            <img src="./img/logo-img/${productoDetalleModal.logo}" class="w-auto h-[32.5px]">
                            <h3 class="text-md text-gray-700 leading-tight">
                                ${productoDetalleModal.marca}
                                <br>
                                <b>${productoDetalleModal.modelo}</b>
                            </h3>
                        </div>
                        <button @click="modelOpen = false" class="text-gray-600 focus:outline-none hover:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>
                    <div class="p-8">
                        <div class="relative">
                            <img src="./img/product-img/${productoDetalleModal.imagen}" alt="" class="object-cover object-center">
                            ${nuevaBadge}
                        </div>
						<dl class="divide-y divide-gray-100 pt-8">
							<div class="py-2.5 pt-0 grid grid-cols-3 sm:grid-cols-4 gap-4">
								<dt class="text-sm font-bold leading-6 text-gray-900">Marca</dt>
								<dd class="mt-1 text-sm leading-6 text-gray-700 col-span-2 sm:col-span-3 sm:mt-0">${productoDetalleModal.marca}</dd>
							</div>
							<div class="py-2.5 grid grid-cols-3 sm:grid-cols-4 gap-4">
								<dt class="text-sm font-bold leading-6 text-gray-900">Modelo</dt>
								<dd class="mt-1 text-sm leading-6 text-gray-700 col-span-2 sm:col-span-3 sm:mt-0">${productoDetalleModal.modelo}</dd>
							</div>
							<div class="py-2.5 grid grid-cols-3 sm:grid-cols-4 gap-4">
								<dt class="text-sm font-bold leading-6 text-gray-900">Año</dt>
								<dd class="mt-1 text-sm leading-6 text-gray-700 col-span-2 sm:col-span-3 sm:mt-0">${productoDetalleModal.anio}</dd>
							</div>
							<div class="py-2.5 grid grid-cols-3 sm:grid-cols-4 gap-4">
								<dt class="text-sm font-bold leading-6 text-gray-900">Condición</dt>
								<dd class="mt-1 text-sm leading-6 text-gray-700 col-span-2 sm:col-span-3 sm:mt-0">${productoDetalleModal.condicion}</dd>
							</div>
							<div class="py-2.5 grid grid-cols-3 sm:grid-cols-4 gap-4">
								<dt class="text-sm font-bold leading-6 text-gray-900">Cilindrada</dt>
								<dd class="mt-1 text-sm leading-6 text-gray-700 col-span-2 sm:col-span-3 sm:mt-0">${productoDetalleModal.cilindrada}${productoDetalleModal.cilindradaMedida}</dd>
							</div>
							<div class="py-2.5 grid grid-cols-3 sm:grid-cols-4 gap-4">
								<dt class="text-sm font-bold leading-6 text-gray-900">Potencia</dt>
								<dd class="mt-1 text-sm leading-6 text-gray-700 col-span-2 sm:col-span-3 sm:mt-0">${productoDetalleModal.potencia}hp</dd>
							</div>
							<div class="py-2.5 grid grid-cols-3 sm:grid-cols-4 gap-4">
								<dt class="text-sm font-bold leading-6 text-gray-900">Kilometraje</dt>
								<dd class="mt-1 text-sm leading-6 text-gray-700 col-span-2 sm:col-span-3 sm:mt-0">${kilometrajeFormateado}</dd>
							</div>
							<div class="py-2.5 pb-0 grid grid-cols-3 sm:grid-cols-4 gap-4">
								<dt class="text-sm font-bold leading-6 text-gray-900">Precio</dt>
								<dd class="mt-1 text-sm leading-6 text-gray-700 col-span-2 sm:col-span-3 sm:mt-0">USD ${numeroFormateado(`${productoDetalleModal.precio}`)}</dd>
							</div>
						</dl>
                    </div>
					<div class="pr-8 pb-8 pl-8 flex items-center flex-row-reverse">
						<button type="button" class="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-5" onclick="addToCart(${productoDetalleModal.id});animarCartCount()" @click="modelOpen = false">Add To Cart</button>
						<button type="button" class="text-sm hover:underline font-semibold text-gray-900 shadow-sm sm:mt-0 sm:w-auto" @click="modelOpen = false">Cancelar</button>
					</div>
                </div>
            </div>
        </div>
    `

    contenedorModal.innerHTML = modalProducto
}

////////////////////////////////////////////////////////////////////////////////////////////////////

// BUSCO Y REMUEVO DUPLICADOS.
function removerProductosDuplicados(array) {
	const existe = {}
	const cantidad = []
  
	array.forEach(item => {
		if (existe[item.id]) {
			existe[item.id].count++
		} else {
			existe[item.id] = { ...item, count: 1 }
			cantidad.push(existe[item.id])
		}
	})
  
	return cantidad
}

// LISTADO DE PRODUCTOS EN SHOPPING CART SLIDE-OVER.
const listadoProductosCart = array => {
	let listadoProductosCart = document.querySelector('#listado-productos-shopping-cart')
	let productoCart = ''

	document.querySelector('#shopping-cart-total').innerText = `USD ${numeroFormateado(JSON.parse(localStorage.getItem('arrayCarrito')).reduce((n, {precio}) => n + precio, 0))}`

	const arraySinDuplicados = removerProductosDuplicados(array);	

	for (const producto of arraySinDuplicados) {
		producto.kilometraje == '0' ? kilometrajeFormateado = '0km.' : kilometrajeFormateado = numeroFormateado(`${producto.precio}kms.`)
		producto.condicion == 'Nueva' ? nuevaBadge = '<span class="absolute top-1.5 right-1.5 items-center rounded-full bg-purple-100 px-2 py-1 text-[.5rem] font-semibold text-purple-700">NUEVA</span>' : nuevaBadge = '<span class="sr-only"></span>'		

		productoCart += `
			<li class="flex py-6" id="product-${producto.id}">
				<div class="relative h-32 w-32 flex flex-shrink-0 items-center justify-center p-1.5 overflow-hidden rounded-md border border-gray-200">
					<img src="./img/product-img/${producto.imagen}" alt="${producto.marca} ${producto.modelo}" class="object-fit object-center">
					${nuevaBadge}
				</div>
				<div class="pb-1.5 ml-4 flex flex-1 flex-col">
					<div>
						<div class="flex justify-between">
							<h3 class="flex flex-col text-sm text-gray-700">
								${producto.marca}
								<b>${producto.modelo}</b>
							</h3>
							<p class="ml-4 text-sm text-gray-700 font-semibold">USD ${numeroFormateado(`${producto.precio}`)}</p>
						</div>
					</div>
					<div class="flex flex-1 items-end justify-between text-sm">
						<div class="flex flex-col">
							<p class="text-xs text-gray-500"><b>Cantidad:</b> <span id="cart-producto-cantidad">${producto.count}</span></p>
							<p class="text-xs text-gray-500"><b>Subtotal:</b> USD ${numeroFormateado(`${producto.precio * producto.count}`)}</p>
						</div>
						<div class="flex flex-col items-end gap-3">
							<div class="flex flex-row gap-1.5">
								<button id="botonMoverArriba" type="button" onclick="moverProducto(${producto.id}, 'arriba')" class="cursor-pointer font-medium text-indigo-600 hover:text-indigo-500">
									<svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
										<path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clip-rule="evenodd" />
									</svg>
								</button>
								<button type="button" onclick="moverProducto(${producto.id}, 'abajo')" class="cursor-pointer font-medium text-indigo-600 hover:text-indigo-500">
									<svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
										<path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clip-rule="evenodd" />
									</svg>
								</button>
							</div>
							<button type="button" onclick="eliminarProductosCart(${producto.id})" class="font-medium text-indigo-600 hover:text-indigo-500">Eliminar</button>
						</div>
					</div>
				</div>
			</li>
		`
	}

	array.length > 0 ? listadoProductosCart.innerHTML = productoCart : listadoProductosCart.innerHTML = `<li class="text-xs text-center text-gray-500 font-semibold">NO HAY PRODUCTOS EN SU CARRITO</li>`
}

const moverProducto = (productoId, direccion) => {
	let array = JSON.parse(localStorage.getItem('arrayCarrito'))
	const index = array.findIndex(product => product.id === productoId)

	if (direccion === 'arriba' && index > 0) {
		[array[index], array[index - 1]] = [array[index - 1], array[index]]
	} else if (direccion === 'abajo' && index < array.length - 1) {
		[array[index], array[index + 1]] = [array[index + 1], array[index]]
	}

	localStorage.setItem('arrayCarrito', JSON.stringify(array))
	listadoProductosCart(array)
}

// ACTUALIZO CART COUNT.
const shoppingCartCount = array => document.querySelector('#shoppingCartCount').innerText = array.length

if (!JSON.parse(localStorage.getItem('arrayCarrito'))) localStorage.setItem('arrayCarrito', JSON.stringify([]));
listadoProductosCart(JSON.parse(localStorage.getItem('arrayCarrito')))
shoppingCartCount(JSON.parse(localStorage.getItem('arrayCarrito')))

// FUNCIÓN ADD TO CART.
const addToCart = productoId => {
	const productoAgregado = JSON.parse(localStorage.getItem('arrayCarrito'))
	productoAgregado.push(PRODUCTOS.find(producto => producto.id === productoId))
	localStorage.setItem('arrayCarrito', JSON.stringify(productoAgregado))
	listadoProductosCart(JSON.parse(localStorage.getItem('arrayCarrito')))
	shoppingCartCount(JSON.parse(localStorage.getItem('arrayCarrito')))
}

// FUNCIÓN REMOVE FROM CART.
const eliminarProductosCart = productoId => {
	const arraySinProductoEliminado = JSON.parse(localStorage.getItem('arrayCarrito')).filter(producto => producto.id != productoId )
	localStorage.setItem('arrayCarrito', JSON.stringify(arraySinProductoEliminado))
	// listadoProductosCart(arraySinProductoEliminado)
	listadoProductosCart(JSON.parse(localStorage.getItem('arrayCarrito')))
	shoppingCartCount(JSON.parse(localStorage.getItem('arrayCarrito')))
}

// LIMPIAR TODO EL CARRITO.
document.querySelector('#botonLimpiarCarrito').addEventListener('click', () => limpiarCarrito())
const limpiarCarrito = () => {
	localStorage.setItem('arrayCarrito', JSON.stringify([]))
	listadoProductosCart(JSON.parse(localStorage.getItem('arrayCarrito')))
	shoppingCartCount(JSON.parse(localStorage.getItem('arrayCarrito')))
}

// ANIMACIÓN CART COUNT.
const animarCartCount = () => {
	const countScaling = [ { transform: "scale(1)" }, { transform: "scale(1.75)" } ]
	const countTiming = { duration: 250, iterations: 1 }
	const cartCount = document.querySelector("#shoppingCartCount")
	cartCount.animate(countScaling, countTiming)
}

////////////////////////////////////////////////////////////////////////////////////////////////////