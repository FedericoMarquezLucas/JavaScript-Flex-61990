////////////////////////////////////////////////////////////////////////////////////////////////////

const fetchProductosJSON = async () => {
    try {
        const respuesta = await fetch('https://federicomarquezlucas.github.io/JavaScript-Flex-61990/products.json')
        const productos = await respuesta.json()
        return productos
    } catch (error) {
        console.log(error)
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////

const MAIN = document.getElementById('main')

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
        <div class="flex flex-row items-center gap-x-3.5">

            <input type="search" name="search" id="searchInput" class="hidden sm:block w-full min-w-[250px] rounded-md border-0 py-1.5 italic text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Buscar">

            <!-- START : WISHLIST -->
            <div class="relative" x-data="{ openWishlist: false }">
                <div class="flex items-center">
                    <button x-on:click="openWishlist = true" class="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" id="wishlistIcon">
                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>
                    </button>
                </div>
                <div class="absolute top-[55px] right-0 z-10 flex w-screen max-w-max" x-show="openWishlist" x-on:click.away="openWishlist = false">
                    <div class="w-screen max-w-md flex-auto overflow-hidden rounded-xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                        <div id="listado-productos-wishlist" class="p-4"></div>
                    </div>
                </div>
            </div>
            <!-- END : WISHLIST -->

            <!-- START : SHOPPING CART SLIDE-OVER -->
            <div x-data="{ openSlideOver: false }">
                <button x-on:click="openSlideOver = true" class="relative" title="Carrito">
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
                                <div x-show="openSlideOver" x-transition:enter="transform transition ease-in-out duration-500 sm:duration-700" x-transition:enter-start="translate-x-full" x-transition:enter-end="translate-x-0" x-transition:leave="transform transition ease-in-out duration-500 sm:duration-700" x-transition:leave-start="translate-x-0" x-transition:leave-end="translate-x-full" class="pointer-events-auto w-screen max-w-md" x-description="Slide-over panel, show/hide based on slide-over state.">
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
                                            <button id="finalizarCompraBoton" title="Finalizar Compra" class="mt-6 flex items-center justify-center w-full rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Finalizar Compra</button>
                                            <div class="mt-4 flex items-center justify-between text-center text-sm text-gray-500">
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

        </div>
    </nav>
`

// SECTION HEADING.
const SECTIONHEADING = document.createElement('div')
SECTIONHEADING.className += 'bg-white pt-[85px]'
SECTIONHEADING.innerHTML += `
    <div class="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-14 lg:px-8">
        <div class="md:flex md:items-center md:justify-between">
            <div class="min-w-0 flex-1">
                <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Listado de Productos</h2>
            </div>
            <div class="mt-4 flex items-center gap-4 md:ml-4 md:mt-0">

                <!-- START : DISPLAY SELECTOR -->
                <span class="isolate hidden lg:inline-flex rounded-md shadow-sm">
                    <button type="button" id="display-table-button" class="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10" title="Display Tabla">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                        </svg>
                    </button>
					</button>
                    <button type="button" id="display-grid-button" class="relative -ml-px inline-flex items-center rounded-r-md bg-gray-200 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-200 focus:z-10" title="Display Grilla">
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
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-y-5" id="productFiltersBar">
                <div class="flex flex-col sm:flex-row gap-y-5 sm:items-center justify-between md:space-x-8">

                    <!-- DROPDOWN FILTERS -->
                    <div class="flex items-center space-x-2">
                        <h3 class="text-xs text-gray-700 font-bold">Filtrar:</h3>

						<!-- START : FILTRO 'MARCA' -->
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
                                                <input id="Honda" value="Honda" name="filtro-marca" type="radio" class="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                                <label for="Honda" class="ml-2 cursor-pointer block text-xs font-medium leading-6 text-gray-900">Honda</label>
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
						<!-- END : FILTRO 'MARCA' -->

						<!-- START : FILTRO 'ESTILO' -->
                        <div class="relative inline-block text-left" id="labelFiltroEstilo" x-data="{ open: false }">
                            <div>
                                <button type="button" x-on:click="open = true" class="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                    Estilo
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
                                                <input id="Cross" value="Cross" name="filtro-estilo" type="radio" class="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                                <label for="Cross" class="ml-2 cursor-pointer block text-xs font-medium leading-6 text-gray-900">Cross</label>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="Cruiser" value="Cruiser" name="filtro-estilo" type="radio" class="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                                <label for="Cruiser" class="ml-2 cursor-pointer block text-xs font-medium leading-6 text-gray-900">Cruiser</label>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="Enduro" value="Enduro" name="filtro-estilo" type="radio" class="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                                <label for="Enduro" class="ml-2 cursor-pointer block text-xs font-medium leading-6 text-gray-900">Enduro</label>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="Scooter" value="Scooter" name="filtro-estilo" type="radio" class="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                                <label for="Scooter" class="ml-2 cursor-pointer block text-xs font-medium leading-6 text-gray-900">Scooter</label>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="Sport" value="Sport" name="filtro-estilo" type="radio" class="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                                <label for="Sport" class="ml-2 cursor-pointer block text-xs font-medium leading-6 text-gray-900">Sport</label>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="Street" value="Street" name="filtro-estilo" type="radio" class="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                                <label for="Street" class="ml-2 cursor-pointer block text-xs font-medium leading-6 text-gray-900">Street</label>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
						<!-- END : FILTRO 'ESTILO' -->

						<!-- START : FILTRO 'AÑO' -->
                        <div class="relative inline-block text-left" id="labelFiltroAnio" x-data="{ open: false }">
                            <div>
                                <button type="button" x-on:click="open = true" class="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                    Año
                                    <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            <div x-show="open" x-on:click.away="open = false" class="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                <div class="p-5" role="none">
                                    <fieldset>
                                        <legend class="sr-only">Año</legend>
                                        <div class="space-y-2">
                                            <div class="flex items-center">
                                                <input id="2024" value="2024" name="filtro-anio" type="radio" class="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                                <label for="2024" class="ml-2 cursor-pointer block text-xs font-medium leading-6 text-gray-900">2024</label>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="2023" value="2023" name="filtro-anio" type="radio" class="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                                <label for="2023" class="ml-2 cursor-pointer block text-xs font-medium leading-6 text-gray-900">2023</label>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="2022" value="2022" name="filtro-anio" type="radio" class="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                                <label for="2022" class="ml-2 cursor-pointer block text-xs font-medium leading-6 text-gray-900">2022</label>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="2020" value="2020" name="filtro-anio" type="radio" class="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                                <label for="2020" class="ml-2 cursor-pointer block text-xs font-medium leading-6 text-gray-900">2020</label>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="2019" value="2019" name="filtro-anio" type="radio" class="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                                <label for="2019" class="ml-2 cursor-pointer block text-xs font-medium leading-6 text-gray-900">2019</label>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="2018" value="2018" name="filtro-anio" type="radio" class="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                                <label for="2018" class="ml-2 cursor-pointer block text-xs font-medium leading-6 text-gray-900">2018</label>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="2015" value="2015" name="filtro-anio" type="radio" class="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                                <label for="2015" class="ml-2 cursor-pointer block text-xs font-medium leading-6 text-gray-900">2015</label>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="2013" value="2013" name="filtro-anio" type="radio" class="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                                <label for="2013" class="ml-2 cursor-pointer block text-xs font-medium leading-6 text-gray-900">2013</label>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="2011" value="2011" name="filtro-anio" type="radio" class="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                                <label for="2011" class="ml-2 cursor-pointer block text-xs font-medium leading-6 text-gray-900">2011</label>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="2010" value="2010" name="filtro-anio" type="radio" class="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                                <label for="2010" class="ml-2 cursor-pointer block text-xs font-medium leading-6 text-gray-900">2010</label>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="2003" value="2003" name="filtro-anio" type="radio" class="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                                <label for="2003" class="ml-2 cursor-pointer block text-xs font-medium leading-6 text-gray-900">2003</label>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="1990" value="1990" name="filtro-anio" type="radio" class="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                                <label for="1990" class="ml-2 cursor-pointer block text-xs font-medium leading-6 text-gray-900">1990</label>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
						<!-- END : FILTRO 'AÑO' -->

						<!-- START : FILTRO 'CONDICION' -->
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
						<!-- END : FILTRO 'CONDICION' -->

                    </div>

                    <!-- SORTING BUTTONS -->
                    <div class="flex items-center space-x-2">
                        <h3 class="text-xs text-gray-700 font-bold">Ordenar:</h3>
                        <button type="button" id="ordenarPrecioAsc" class="inline-flex items-center gap-x-1.5 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" title="Precio Ascendente">
							Precio
							<svg class="-mr-0.5 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
								<path fill-rule="evenodd" d="M2.25 4.5A.75.75 0 0 1 3 3.75h14.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm0 4.5A.75.75 0 0 1 3 8.25h9.75a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9Zm15-.75A.75.75 0 0 1 18 9v10.19l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 1 1 1.06-1.06l2.47 2.47V9a.75.75 0 0 1 .75-.75Zm-15 5.25a.75.75 0 0 1 .75-.75h9.75a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
							</svg>
						</button>
                        <button type="button" id="ordenarPrecioDes" class="inline-flex items-center gap-x-1.5 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" title="Precio Descendente">
							Precio
							<svg class="-mr-0.5 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
								<path fill-rule="evenodd" d="M2.25 4.5A.75.75 0 0 1 3 3.75h14.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm14.47 3.97a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 1 1-1.06 1.06L18 10.81V21a.75.75 0 0 1-1.5 0V10.81l-2.47 2.47a.75.75 0 1 1-1.06-1.06l3.75-3.75ZM2.25 9A.75.75 0 0 1 3 8.25h9.75a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9Zm0 4.5a.75.75 0 0 1 .75-.75h5.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
							</svg>						  
						</button>
                        <button type="button" id="ordenarReciente" class="inline-flex items-center gap-x-1 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" title="Recientes">
							Recientes
							<svg class="-mr-0.5 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
							</svg>
						</button>
                    </div>

                </div>

                <!-- CLEAR FILTERS BUTTON -->
                <div class="flex items-start">
                    <button type="button" id="borrarFiltros" class="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" title="Borrar Filtros">Borrar Filtros</button>
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
        <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:pt-0 lg:px-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 lg:gap-x-8" id="listado-productos"></div>
            <div class="flex items-center justify-between mt-10 pt-8 border-t border-gray-200">
                <p class="text-xs sm:text-sm text-gray-700">
                    <span id="resultados-productos"></span>
                    <span id="resultado-array"></span>
                </p>
                <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" id="pagination-controls" aria-label="Pagination"></nav>
            </div>
        </div>
        <div id="modal-producto"></div>
    </div>
`

// FOOTER.
const FOOTER = document.createElement('footer')
FOOTER.className += 'bg-white rounded-lg shadow mx-4 mb-4 dark:bg-gray-900'
FOOTER.innerHTML += `
    <div class="w-full mx-auto max-w-screen-xl p-4 flex items-center flex-col gap-3 md:flex-row md:justify-between lg:px-8">
        <span class="text-xs sm:text-sm text-gray-500 dark:text-white sm:text-center dark:text-gray-400">
            Federico Márquez Lucas | Entregable #2 - JavaScript Flex | 61990
        </span>
        <img src="./img/logo-img/CODERHOUSE_Logo.svg" alt="CODERHOUSE" class="w-auto h-[15px]">
    </div>
`

// 'ADD TO CART' ALERT.
const CARTALERT = document.createElement('div')
CARTALERT.setAttribute('id', 'cartAlert')
CARTALERT.className += 'hidden rounded-md border p-4 fixed bottom-[15px] left-[50%] transform translate-x-[-50%] z-50'
CARTALERT.innerHTML += `
	<div class="flex items-center">
		<div class="flex-shrink-0" id="alertIconContainer"></div>
		<div class="flex flex-row gap-1.5 ml-3 text-sm font-medium">
			<p><b id="alertDetalleMoto"></b></p>
			<p id="alertAccionMoto"></p>
		</div>
	</div>
`

MAIN.append(HEADER)
MAIN.append(SECTIONHEADING)
MAIN.append(PRODUCTLISTING)
MAIN.append(FOOTER)
MAIN.append(CARTALERT)

////////////////////////////////////////////////////////////////////////////////////////////////////

const numeroFormateado = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

////////////////////////////////////////////////////////////////////////////////////////////////////

// SWITCH DISPLAY LISTADO DE PRODUCTOS ( GRID/TABLE ).
// ACTIVE/INACTIVE STATE DE CADA BOTÓN.

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

function toggleSortButtonClasses (buttons, removeClasses, addClasses) {
    buttons.forEach(buttonID => {
        const button = document.getElementById(buttonID)
        button.classList.remove(...removeClasses)
        button.classList.add(...addClasses)
    })
}

////////////////////////////////////////////////////////////////////////////////////////////////////

function toggleRadioButtons (names) {
    names.forEach(name => {
        const radioButtons = document.querySelectorAll(`input[name="${name}"]`)
        radioButtons.forEach(button => button.checked = false)
    })
}

////////////////////////////////////////////////////////////////////////////////////////////////////

// DISPLAY DE CANTIDAD DE RESULTADOS.
const displayDeResultados = (array, inicio, final) => {
    let resultado = document.querySelector('#resultado-array')
    document.querySelector('#resultados-productos').innerHTML = `Mostrando <b>${inicio == 0 ? inicio + 1 : inicio}</b> a <b>${final > array.length ? final = array.length : final}</b>`
    array.length > 1 ? resultado.innerHTML = `de <b>${array.length}</b> Motos` : resultado.innerHTML = `Moto`
}

////////////////////////////////////////////////////////////////////////////////////////////////////

// LISTADO DE PRODUCTOS.
/* const cargaGrillaDeProductos = (array, restoreStorage) => {
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
					<div class="flex items-center gap-3.5">
						<button type="button" onclick="addToWishlist(${producto.id})" class="text-xs hover:underline font-semibold text-gray-500 sm:mt-0 sm:w-auto" title="Add to Wishlist">Add to Wishlist</button>
						<button type="button" onclick="addToCart(${producto.id});animarCartCount()" class="rounded-full bg-indigo-600 px-2.5 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" title="Add To Cart">Add To Cart</button>
					</div>
				</div>
            </div>
        `
    }

    array.length > 0 ? contenedor.innerHTML = listadoProductos : contenedor.innerHTML = `<h3 class="text-xs text-center	font-semibold text-red-500 col-span-3">- NO EXISTEN COINCIDENCIAS -</h3>`

    // restoreStorage ? fetchProductosJSON().then(productos => localStorage.setItem('PRODUCTOS', JSON.stringify(productos))) : localStorage.setItem('PRODUCTOS', JSON.stringify(array))
}

fetchProductosJSON().then(productos => localStorage.setItem('PRODUCTOS', JSON.stringify(productos)))
cargaGrillaDeProductos(JSON.parse(localStorage.getItem('PRODUCTOS')), false) */

const productosPorPagina = 15
let paginaActual = 1

const mostrarPaginaPaginado = (array, pagina) => {
    const inicio = (pagina - 1) * productosPorPagina
    const final = inicio + productosPorPagina
    const arrayPaginado = array.slice(inicio, final)

    cargaGrillaDeProductos(arrayPaginado, false)

    const totalPaginas = Math.ceil(array.length / productosPorPagina)
    updatePaginationControls(totalPaginas, pagina)

    displayDeResultados(array, inicio, final)
}

const updatePaginationControls = (totalPaginas, paginaActual) => {
    const paginationControls = document.querySelector('#pagination-controls')
    let controlsHTML = ''

    controlsHTML += `
        <button class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 ${paginaActual === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-50'}" onclick="irPagina(${paginaActual - 1})" ${paginaActual === 1 ? 'disabled' : ''}>
            <span class="sr-only">Previous</span>
            <svg class="h-4 sm:h-5 w-4 sm:w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
            </svg>
        </button>
    `

    for (let i = 1; i <= totalPaginas; i++) {
        controlsHTML += `<button class="relative z-10 inline-flex items-center px-3 sm:px-4 py-2 text-xs sm:text-sm focus:z-20 ${i === paginaActual ? 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-indigo-600 text-white font-bold' : 'text-gray-900 font-medium ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0'}" onclick="irPagina(${i})">${i}</button>`
    }

    controlsHTML += `
        <button class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 ${paginaActual === totalPaginas ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-50'}" onclick="irPagina(${paginaActual + 1})" ${paginaActual === totalPaginas ? 'disabled' : ''}>
            <span class="sr-only">Next</span>
            <svg class="h-4 sm:h-5 w-4 sm:w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
            </svg>
        </button>
    `

    paginationControls.innerHTML = controlsHTML
}

const irPagina = (page) => {
    const productos = JSON.parse(localStorage.getItem('PRODUCTOS'))
    const totalPaginas = Math.ceil(JSON.parse(localStorage.getItem('PRODUCTOS')).length / productosPorPagina)
    if (page < 1) page = 1
    if (page > totalPaginas) page = totalPaginas
    paginaActual = page
    mostrarPaginaPaginado(productos, paginaActual)
}

// LISTADO DE PRODUCTOS.
const cargaGrillaDeProductos = (array, restoreStorage) => {
    // displayDeResultados(array)
    let contenedor = document.querySelector('#listado-productos');
    let listadoProductos = '';

    for (const producto of array) {
        producto.kilometraje == '0' ? kilometrajeFormateado = '0km.' : kilometrajeFormateado = numeroFormateado(`${producto.precio}kms.`);
        producto.condicion == 'Nueva' ? nuevaBadge = '<span class="absolute top-3 right-3 items-center rounded-full bg-purple-100 px-2.5 py-1.5 text-xs font-semibold text-purple-700">NUEVA</span>' : nuevaBadge = '<span class="sr-only"></span>';

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
                    <div class="flex items-center gap-3.5">
                        <button type="button" onclick="addToWishlist(${producto.id})" class="text-xs hover:underline font-semibold text-gray-500 sm:mt-0 sm:w-auto" title="Add to Wishlist">Add to Wishlist</button>
                        <button type="button" onclick="addToCart(${producto.id});animarCartCount()" class="rounded-full bg-indigo-600 px-2.5 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" title="Add To Cart">Add To Cart</button>
                    </div>
                </div>
            </div>
        `;
    }

    array.length > 0 ? contenedor.innerHTML = listadoProductos : contenedor.innerHTML = `<h3 class="text-xs text-center font-semibold text-red-500 col-span-3">- NO EXISTEN COINCIDENCIAS -</h3>`;
}

fetchProductosJSON().then(productos => {
    localStorage.setItem('PRODUCTOS', JSON.stringify(productos))
    mostrarPaginaPaginado(productos, paginaActual)
})

////////////////////////////////////////////////////////////////////////////////////////////////////

// FILTRO POR 'MARCA'.
const filtrarPorMarca = marca => {
	const arrayFiltradoPorMarca = []
    // const arrayFiltradoPorMarca = JSON.parse(localStorage.getItem('PRODUCTOS')).filter(producto => producto.marca == marca)

	if (estiloFiltradoActivo) {
		if (estiloFiltradoActivo && anioFiltradoActivo && condicionFiltradaActiva) JSON.parse(localStorage.getItem('PRODUCTOS')).filter(producto => producto.estilo == estiloFiltradoActivo).filter(producto => producto.anio == anioFiltradoActivo).filter(producto => producto.condicion == condicionFiltradaActiva).filter(producto => producto.marca == marca).forEach(producto => arrayFiltradoPorMarca.push(producto))
		else if (estiloFiltradoActivo && anioFiltradoActivo) JSON.parse(localStorage.getItem('PRODUCTOS')).filter(producto => producto.estilo == estiloFiltradoActivo).filter(producto => producto.anio == anioFiltradoActivo).filter(producto => producto.marca == marca).forEach(producto => arrayFiltradoPorMarca.push(producto))
		else JSON.parse(localStorage.getItem('PRODUCTOS')).filter(producto => producto.estilo == estiloFiltradoActivo).filter(producto => producto.marca == marca).forEach(producto => arrayFiltradoPorMarca.push(producto))
	} else if (anioFiltradoActivo) JSON.parse(localStorage.getItem('PRODUCTOS')).filter(producto => producto.anio == anioFiltradoActivo).filter(producto => producto.marca == marca).forEach(producto => arrayFiltradoPorMarca.push(producto))
	else if (condicionFiltradaActiva) JSON.parse(localStorage.getItem('PRODUCTOS')).filter(producto => producto.condicion == condicionFiltradaActiva).filter(producto => producto.marca == marca).forEach(producto => arrayFiltradoPorMarca.push(producto))
	else JSON.parse(localStorage.getItem('PRODUCTOS')).filter(producto => producto.marca == marca).forEach(producto => arrayFiltradoPorMarca.push(producto))

    mostrarPaginaPaginado(arrayFiltradoPorMarca, paginaActual)
    // cargaGrillaDeProductos(arrayFiltradoPorMarca, true)
    // localStorage.setItem('PRODUCTOS', JSON.stringify(PRODUCTOS))
}

let marcaFiltradaActiva = ''
const radioButtonsMarca = document.querySelectorAll('input[name="filtro-marca"]')
arrayRadioButtonsMarca = Array.from(radioButtonsMarca)
arrayRadioButtonsMarca.forEach(button => {
    button.addEventListener('change', () => {
        if (button.checked) {
            filtrarPorMarca(button.value)
            marcaFiltradaActiva = button.value
            toggleSortButtonClasses(['ordenarPrecioAsc', 'ordenarPrecioDes', 'ordenarReciente'], sortButtonActiveClasses, sortButtonInactiveClasses)
        }
    })
})

// MUESTRO LA CANTIDAD DE RESULTADOS POR MARCA EN CADA OPCIÓN DEL FILTRO.
// productosReducidosPorMarca = JSON.parse(localStorage.getItem('PRODUCTOS'))

// const agrupadoPorMarca = productosReducidosPorMarca.reduce((acc, item) => {
//     acc[item.marca] = (acc[item.marca] || 0) + 1
//     return acc
// }, {})

// const labelsMarca = document.querySelectorAll('#labelFiltroMarca label')
// labelsMarca.forEach(label => {
//     const marca = label.getAttribute('for')
//     const contador = agrupadoPorMarca[marca] || 0
//     label.textContent += ` (${contador})`
// })

////////////////////////////////////////////////////////////////////////////////////////////////////

// FILTRO POR 'ESTILO'.
const filtrarPorEstilo = estilo => {
    const arrayFiltradoPorEstilo = []

    if (marcaFiltradaActiva) {
		if (marcaFiltradaActiva && anioFiltradoActivo && condicionFiltradaActiva) JSON.parse(localStorage.getItem('PRODUCTOS')).filter(producto => producto.marca == marcaFiltradaActiva).filter(producto => producto.anio == anioFiltradoActivo).filter(producto => producto.condicion == condicionFiltradaActiva).filter(producto => producto.estilo == estilo).forEach(producto => arrayFiltradoPorEstilo.push(producto))
		else if (marcaFiltradaActiva && condicionFiltradaActiva) JSON.parse(localStorage.getItem('PRODUCTOS')).filter(producto => producto.marca == marcaFiltradaActiva).filter(producto => producto.condicion == condicionFiltradaActiva).filter(producto => producto.estilo == estilo).forEach(producto => arrayFiltradoPorEstilo.push(producto))
		else JSON.parse(localStorage.getItem('PRODUCTOS')).filter(producto => producto.marca == marcaFiltradaActiva).filter(producto => producto.estilo == estilo).forEach(producto => arrayFiltradoPorEstilo.push(producto))
	} else if (anioFiltradoActivo) JSON.parse(localStorage.getItem('PRODUCTOS')).filter(producto => producto.anio == anioFiltradoActivo).filter(producto => producto.estilo == estilo).forEach(producto => arrayFiltradoPorEstilo.push(producto))
	else if (condicionFiltradaActiva) JSON.parse(localStorage.getItem('PRODUCTOS')).filter(producto => producto.condicion == condicionFiltradaActiva).filter(producto => producto.estilo == estilo).forEach(producto => arrayFiltradoPorEstilo.push(producto))
    else JSON.parse(localStorage.getItem('PRODUCTOS')).filter(producto => producto.estilo == estilo).forEach(producto => arrayFiltradoPorEstilo.push(producto))

    mostrarPaginaPaginado(arrayFiltradoPorEstilo, paginaActual)
    // cargaGrillaDeProductos(arrayFiltradoPorEstilo, true)
}

let estiloFiltradoActivo = ''
const radioButtonsEstilo = document.querySelectorAll('input[name="filtro-estilo"]')
arrayRadioButtonsEstilo = Array.from(radioButtonsEstilo)
arrayRadioButtonsEstilo.forEach(button => {
    button.addEventListener('change', () => {
        if (button.checked) {
            filtrarPorEstilo(button.value)
			estiloFiltradoActivo = button.value
            toggleSortButtonClasses(['ordenarPrecioAsc', 'ordenarPrecioDes', 'ordenarReciente'], sortButtonActiveClasses, sortButtonInactiveClasses)
        }
    })
})

////////////////////////////////////////////////////////////////////////////////////////////////////

// FILTRO POR 'AÑO'.
const filtrarPorAnio = anio => {
    const arrayFiltradoPorAnio = []
    
    if (marcaFiltradaActiva) {
		if (marcaFiltradaActiva && estiloFiltradoActivo && condicionFiltradaActiva) JSON.parse(localStorage.getItem('PRODUCTOS')).filter(producto => producto.marca == marcaFiltradaActiva).filter(producto => producto.estilo == estiloFiltradoActivo).filter(producto => producto.condicion == condicionFiltradaActiva).filter(producto => producto.anio == anio).forEach(producto => arrayFiltradoPorAnio.push(producto))
		else if (marcaFiltradaActiva && estiloFiltradoActivo) JSON.parse(localStorage.getItem('PRODUCTOS')).filter(producto => producto.marca == marcaFiltradaActiva).filter(producto => producto.estilo == estiloFiltradoActivo).filter(producto => producto.anio == anio).forEach(producto => arrayFiltradoPorAnio.push(producto))
		else JSON.parse(localStorage.getItem('PRODUCTOS')).filter(producto => producto.marca == marcaFiltradaActiva).filter(producto => producto.anio == anio).forEach(producto => arrayFiltradoPorAnio.push(producto))
	} else if (estiloFiltradoActivo) JSON.parse(localStorage.getItem('PRODUCTOS')).filter(producto => producto.estilo == estiloFiltradoActivo).filter(producto => producto.anio == anio).forEach(producto => arrayFiltradoPorAnio.push(producto))
	else if (condicionFiltradaActiva) JSON.parse(localStorage.getItem('PRODUCTOS')).filter(producto => producto.condicion == condicionFiltradaActiva).filter(producto => producto.anio == anio).forEach(producto => arrayFiltradoPorAnio.push(producto))
    else JSON.parse(localStorage.getItem('PRODUCTOS')).filter(producto => producto.anio == anio).forEach(producto => arrayFiltradoPorAnio.push(producto))

    mostrarPaginaPaginado(arrayFiltradoPorAnio, paginaActual)
    // cargaGrillaDeProductos(arrayFiltradoPorAnio, true)
}

let anioFiltradoActivo = ''
const radioButtonsAnio = document.querySelectorAll('input[name="filtro-anio"]')
arrayRadioButtonsAnio = Array.from(radioButtonsAnio)
arrayRadioButtonsAnio.forEach(button => {
    button.addEventListener('change', () => {
        if (button.checked) {
            filtrarPorAnio(button.value)
            anioFiltradoActivo = button.value
            toggleSortButtonClasses(['ordenarPrecioAsc', 'ordenarPrecioDes', 'ordenarReciente'], sortButtonActiveClasses, sortButtonInactiveClasses)
        }
    })
})

////////////////////////////////////////////////////////////////////////////////////////////////////

// FILTRO POR 'CONDICIÓN'.
const filtrarPorCondicion = condicion => {
    const arrayFiltradoPorCondicion = []
    
    if (marcaFiltradaActiva) {
		if (marcaFiltradaActiva && estiloFiltradoActivo && anioFiltradoActivo) JSON.parse(localStorage.getItem('PRODUCTOS')).filter(producto => producto.marca == marcaFiltradaActiva).filter(producto => producto.estilo == estiloFiltradoActivo).filter(producto => producto.anio == anioFiltradoActivo).filter(producto => producto.condicion == condicion).forEach(producto => arrayFiltradoPorCondicion.push(producto))
		else if (marcaFiltradaActiva && estiloFiltradoActivo) JSON.parse(localStorage.getItem('PRODUCTOS')).filter(producto => producto.marca == marcaFiltradaActiva).filter(producto => producto.estilo == estiloFiltradoActivo).filter(producto => producto.condicion == condicion).forEach(producto => arrayFiltradoPorCondicion.push(producto))
		else JSON.parse(localStorage.getItem('PRODUCTOS')).filter(producto => producto.marca == marcaFiltradaActiva).filter(producto => producto.condicion == condicion).forEach(producto => arrayFiltradoPorCondicion.push(producto))
	} else if (estiloFiltradoActivo) JSON.parse(localStorage.getItem('PRODUCTOS')).filter(producto => producto.estilo == estiloFiltradoActivo).filter(producto => producto.condicion == condicion).forEach(producto => arrayFiltradoPorCondicion.push(producto))
	else if (anioFiltradoActivo) JSON.parse(localStorage.getItem('PRODUCTOS')).filter(producto => producto.anio == anioFiltradoActivo).filter(producto => producto.condicion == condicion).forEach(producto => arrayFiltradoPorCondicion.push(producto))
    else JSON.parse(localStorage.getItem('PRODUCTOS')).filter(producto => producto.condicion == condicion).forEach(producto => arrayFiltradoPorCondicion.push(producto))

    mostrarPaginaPaginado(arrayFiltradoPorCondicion, paginaActual)
    // cargaGrillaDeProductos(arrayFiltradoPorCondicion, true)
}

let condicionFiltradaActiva = ''
const radioButtonsCondicion = document.querySelectorAll('input[name="filtro-condicion"]')
arrayRadioButtonsCondicion = Array.from(radioButtonsCondicion)
arrayRadioButtonsCondicion.forEach(button => {
    button.addEventListener('change', () => {
        if (button.checked) {
            filtrarPorCondicion(button.value)
            condicionFiltradaActiva = button.value
            toggleSortButtonClasses(['ordenarPrecioAsc', 'ordenarPrecioDes', 'ordenarReciente'], sortButtonActiveClasses, sortButtonInactiveClasses)
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

    if (marcaFiltradaActiva) {
		if (marcaFiltradaActiva && anioFiltradoActivo && condicionFiltradaActiva) JSON.parse(localStorage.getItem('PRODUCTOS')).filter(producto => producto.marca == marcaFiltradaActiva).filter(producto => producto.anio == anioFiltradoActivo).filter(producto => producto.condicion == condicionFiltradaActiva).forEach(producto => arrayProductosOrdenados.push(producto))
		else if (marcaFiltradaActiva && condicionFiltradaActiva) JSON.parse(localStorage.getItem('PRODUCTOS')).filter(producto => producto.marca == marcaFiltradaActiva).filter(producto => producto.condicion == condicionFiltradaActiva).forEach(producto => arrayProductosOrdenados.push(producto))
		else JSON.parse(localStorage.getItem('PRODUCTOS')).filter(producto => producto.marca == marcaFiltradaActiva).forEach(producto => arrayProductosOrdenados.push(producto))
	} else if (estiloFiltradoActivo) JSON.parse(localStorage.getItem('PRODUCTOS')).filter(producto => producto.estilo == estiloFiltradoActivo).forEach(producto => arrayProductosOrdenados.push(producto)) 
    else if (anioFiltradoActivo) JSON.parse(localStorage.getItem('PRODUCTOS')).filter(producto => producto.anio == anioFiltradoActivo).forEach(producto => arrayProductosOrdenados.push(producto))
	else if (condicionFiltradaActiva) JSON.parse(localStorage.getItem('PRODUCTOS')).filter(producto => producto.condicion == condicionFiltradaActiva).forEach(producto => arrayProductosOrdenados.push(producto))
    else JSON.parse(localStorage.getItem('PRODUCTOS')).forEach(producto => arrayProductosOrdenados.push(producto))

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

// GENERO LISTADO INICIAL SIN FILTROS APLICADOS.
document.getElementById('borrarFiltros').addEventListener('click', () => listadoProductosInicial())

const listadoProductosInicial = () => {
    toggleRadioButtons(['filtro-marca', 'filtro-estilo', 'filtro-anio', 'filtro-condicion'])
    toggleSortButtonClasses(['ordenarPrecioAsc', 'ordenarPrecioDes', 'ordenarReciente'], sortButtonActiveClasses, sortButtonInactiveClasses)
    cargaGrillaDeProductos(JSON.parse(localStorage.getItem('PRODUCTOS')), false)
}

////////////////////////////////////////////////////////////////////////////////////////////////////

// GENERO EL MODAL CONTENT A PARTIR DEL ID RECIBIDO EN LA FUNCIÓN.
const triggerModal = productoId => {
    const productoDetalleModal = JSON.parse(localStorage.getItem('PRODUCTOS')).find(producto => producto.id === productoId)
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
								<dt class="text-sm font-bold leading-6 text-gray-900">Estilo</dt>
								<dd class="mt-1 text-sm leading-6 text-gray-700 col-span-2 sm:col-span-3 sm:mt-0">${productoDetalleModal.estilo}</dd>
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
						<button type="button" class="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-5" onclick="addToCart(${productoDetalleModal.id});animarCartCount()" @click="modelOpen = false" title="Add To Cart">Add To Cart</button>
						<button type="button" class="text-sm hover:underline font-semibold text-gray-500 sm:mt-0 sm:w-auto" onclick="addToWishlist(${productoDetalleModal.id});animarWishlistIcon()" @click="modelOpen = false" title="Add to Wishlist">Add to Wishlist</button>
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
	const arraySinDuplicados = removerProductosDuplicados(array)
	let listadoProductosCart = document.querySelector('#listado-productos-shopping-cart')
	let productoCart = ''
	let hiddenButtons = ''

	if (arraySinDuplicados.length < 2) hiddenButtons = 'hidden'
	document.querySelector('#shopping-cart-total').innerText = `USD ${numeroFormateado(JSON.parse(localStorage.getItem('arrayCarrito')).reduce((n, {precio}) => n + precio, 0))}`

    const finalizarCompraBoton = document.querySelector('#finalizarCompraBoton')
    !arraySinDuplicados.length ? finalizarCompraBoton.classList.add('hidden') : finalizarCompraBoton.classList.remove('hidden')

	for (const producto of arraySinDuplicados) {
		producto.kilometraje == '0' ? kilometrajeFormateado = '0km.' : kilometrajeFormateado = numeroFormateado(`${producto.precio}kms.`)
		producto.condicion == 'Nueva' ? nuevaBadge = '<span class="absolute top-1.5 right-1.5 items-center rounded-full bg-purple-100 px-2 py-1 text-[.5rem] font-semibold text-purple-700">NUEVA</span>' : nuevaBadge = '<span class="sr-only"></span>'

		const index = arraySinDuplicados.findIndex(product => product.id === producto.id)
		let {hiddenFirst, hiddenLast} = ''
		if (index == 0) hiddenFirst = 'hidden'
		else if (index == arraySinDuplicados.length - 1) hiddenLast = 'hidden'

		productoCart += `
			<li class="flex py-6" id="product-${producto.id}">
				<div class="relative h-32 w-32 flex flex-shrink-0 items-center justify-center p-1.5 overflow-hidden rounded-md border border-gray-200">
					<img src="./img/product-img/${producto.imagen}" alt="${producto.marca} ${producto.modelo}" class="object-fit object-center">
					${nuevaBadge}
				</div>
				<div class="pb-1.5 ml-3.5 flex flex-1 flex-col">
					<div>
						<div class="flex justify-between">
							<h3 class="flex flex-col text-xs text-gray-700">
								${producto.marca}
								<b>${producto.modelo}</b>
							</h3>
							<p class="text-sm text-gray-700 font-bold tracking-tighter">USD ${numeroFormateado(`${producto.precio}`)}</p>
						</div>
					</div>
					<div class="flex flex-1 items-end justify-between text-sm">
						<div class="flex flex-col">
							<p class="text-[.65rem] text-gray-500 leading-normal">
                                <b>Cantidad:</b> <span id="cart-producto-cantidad">${producto.count}</span>
                                </br>
                                <b>Subtotal:</b> USD ${numeroFormateado(`${producto.precio * producto.count}`)}
                            </p>
						</div>
						<div class="flex flex-col items-end gap-3">
							<div class="flex flex-row gap-1.5 ${hiddenButtons}">
								<button id="botonMoverArriba" type="button" onclick="moverProducto(${producto.id}, 'arriba')" class="${hiddenFirst} cursor-pointer font-medium text-indigo-600 hover:text-indigo-500" title="Mover Arriba">
									<svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
										<path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clip-rule="evenodd" />
									</svg>
								</button>
								<button type="button" onclick="moverProducto(${producto.id}, 'abajo')" class="${hiddenLast} cursor-pointer font-medium text-indigo-600 hover:text-indigo-500" title="Mover Abajo">
									<svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
										<path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clip-rule="evenodd" />
									</svg>
								</button>
							</div>
							<div class="flex flex-col gap-1 items-end">
                                <button type="button" onclick="eliminarProductosCart(${producto.id})" class="font-medium text-xs text-indigo-600 hover:text-indigo-500" title="Eliminar">Eliminar</button>
                                <button type="button" onclick="moverProductoDeCartAWishlist(${producto.id})" class="font-medium text-xs text-indigo-600 hover:text-indigo-500" title="Mover a Wishlist">Mover a Wishlist</button>
                            </div>
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

// ADD TO CART ALERT.
const alertaProductoCarrito = (marca, modelo, action) => {
    const cartAlert = document.querySelector('#cartAlert')
    const alertIconContainer = document.querySelector('#alertIconContainer')
    const alertAccionMoto = document.querySelector('#alertAccionMoto')

    const alertaProductoContenido = (message, iconHTML, addClasses, removeClasses) => {
        document.querySelector('#alertDetalleMoto').innerHTML = `${marca} ${modelo}`
        cartAlert.classList.remove('hidden', ...removeClasses)
        cartAlert.classList.add(...addClasses)
        alertIconContainer.innerHTML = iconHTML
        alertAccionMoto.innerHTML = message
    };

    const addActionClasses = ['bg-green-100', 'border-green-200', 'text-green-800']
    const existsActionClasses = ['bg-blue-100', 'border-blue-200', 'text-blue-700']
    const removeActionClasses = ['bg-yellow-100', 'border-yellow-200', 'text-yellow-700']

    const iconMap = {
        add: `<svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>`,
        addWishlist: `<svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>`,
        movedToCart: `<svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>`,
        movedToWishlist: `<svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>`,
        remove: `<svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>`,
        removeWishlist: `<svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>`,
        existWishlist: `<svg class="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>`
    }

    switch (action) {
        case 'add':
        case 'addWishlist':
        case 'movedToCart':
        case 'movedToWishlist':
            alertaProductoContenido(
                action === 'add' ? 'agregada al Carrito' : 
                action === 'addWishlist' ? 'agregada a Wishlist' : 
                action === 'movedToCart' ? 'movida al Carrito' : 'movida a Wishlist',
                iconMap[action],
                addActionClasses,
                [...existsActionClasses, ...removeActionClasses]
            );
            break
        case 'remove':
        case 'removeWishlist':
            alertaProductoContenido(
                action === 'remove' ? 'eliminada del Carrito' : 'eliminada de Wishlist',
                iconMap[action],
                removeActionClasses,
                [...addActionClasses, ...existsActionClasses]
            );
            break
        case 'existWishlist':
            alertaProductoContenido(
                'ya existe en la Wishlist',
                iconMap[action],
                existsActionClasses,
                [...addActionClasses, ...removeActionClasses]
            );
            break
    }

    cartAlert.animate([{ bottom: '-50px' }, { bottom: '15px' }], { duration: 250 })

    setTimeout(() => {
        cartAlert.classList.add('hidden')
    }, 2500)
}


if (!JSON.parse(localStorage.getItem('arrayCarrito'))) localStorage.setItem('arrayCarrito', JSON.stringify([]));
listadoProductosCart(JSON.parse(localStorage.getItem('arrayCarrito')))
shoppingCartCount(JSON.parse(localStorage.getItem('arrayCarrito')))

// FUNCIÓN ADD TO CART.
const addToCart = productoId => {
	const productoAgregado = JSON.parse(localStorage.getItem('arrayCarrito'))
	productoAgregado.push(JSON.parse(localStorage.getItem('PRODUCTOS')).find(producto => producto.id === productoId))
	localStorage.setItem('arrayCarrito', JSON.stringify(productoAgregado))
	listadoProductosCart(JSON.parse(localStorage.getItem('arrayCarrito')))
	shoppingCartCount(JSON.parse(localStorage.getItem('arrayCarrito')))
	let productoAlerta = {}
	productoAlerta = JSON.parse(localStorage.getItem('PRODUCTOS')).find(producto => producto.id === productoId)
	alertaProductoCarrito(`${productoAlerta.marca}`, `${productoAlerta.modelo}`, 'add')
}

// FUNCIÓN REMOVE FROM CART.
const eliminarProductosCart = productoId => {
	const arraySinProductoEliminado = JSON.parse(localStorage.getItem('arrayCarrito')).filter(producto => producto.id != productoId )
	localStorage.setItem('arrayCarrito', JSON.stringify(arraySinProductoEliminado))
	// listadoProductosCart(arraySinProductoEliminado)
	listadoProductosCart(JSON.parse(localStorage.getItem('arrayCarrito')))
	shoppingCartCount(JSON.parse(localStorage.getItem('arrayCarrito')))
	let productoAlerta = {}
	productoAlerta = JSON.parse(localStorage.getItem('PRODUCTOS')).find(producto => producto.id === productoId)
	alertaProductoCarrito(`${productoAlerta.marca}`, `${productoAlerta.modelo}`, 'remove')
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
	const countScaling = [ { transform: 'scale(1)' }, { transform: 'scale(1.75)' }, { transform: 'scale(1)' } ]
	const countTiming = { duration: 250, iterations: 1 }
	const cartCount = document.querySelector('#shoppingCartCount')
	cartCount.animate(countScaling, countTiming)
}

////////////////////////////////////////////////////////////////////////////////////////////////////

// LISTADO DE PRODUCTOS EN WISHLIST.
const listadoProductosWishlist = array => {
	let listadoProductosWishlist = document.querySelector('#listado-productos-wishlist')
	let productoWishlist = ''

	for (const producto of array) {
		producto.kilometraje == '0' ? kilometrajeFormateado = '0km.' : kilometrajeFormateado = numeroFormateado(`${producto.precio}kms.`)
		producto.condicion == 'Nueva' ? nuevaBadge = '<span class="absolute top-1.5 right-1.5 items-center rounded-full bg-purple-100 px-2 py-1 text-[.5rem] font-semibold text-purple-700">NUEVA</span>' : nuevaBadge = '<span class="sr-only"></span>'

		productoWishlist += `
			<div class="relative flex items-center justify-between rounded-lg p-4 hover:bg-gray-100">
				<div class="flex flex-row items-center gap-x-5">
					<div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
						<div class="relative w-14 h-14 flex flex-shrink-0 items-center justify-center p-1 overflow-hidden rounded-md border border-gray-200 bg-white hover:bg-white">
							<img src="./img/product-img/${producto.imagen}" alt="${producto.marca} ${producto.modelo}" class="object-fit object-center">
						</div>
					</div>
					<div><p class="flex flex-col text-xs text-gray-700">
							${producto.marca}
							<b>${producto.modelo}</b>
						</p>
					</div>
				</div>
				<div class="flex flex-col gap-1.5">
					<button type="button" onclick="eliminarProductosWishlist(${producto.id})" class="font-medium text-xs text-indigo-600 hover:text-indigo-500 hover:underline" title="Eliminar">Eliminar</button>
					<button type="button" onclick="moverProductoDeWishlistAlCart(${producto.id})" class="font-medium text-xs text-indigo-600 hover:text-indigo-500 hover:underline" title="Mover al Cart">Mover al Cart</button>
				</div>
			</div>
		`
	}

	array.length > 0 ? listadoProductosWishlist.innerHTML = productoWishlist : listadoProductosWishlist.innerHTML = `<div class="text-xs text-center text-gray-500 font-semibold">NO HAY PRODUCTOS EN SU WISHLIST</div>`
}


if (!JSON.parse(localStorage.getItem('arrayWishlist'))) localStorage.setItem('arrayWishlist', JSON.stringify([]));
listadoProductosWishlist(JSON.parse(localStorage.getItem('arrayWishlist')))

// FUNCIÓN ADD TO WISHLIST.
const addToWishlist = productoId => {
	const productoAgregado = JSON.parse(localStorage.getItem('arrayWishlist'))

	let productoAlerta = {}
	productoAlerta = JSON.parse(localStorage.getItem('PRODUCTOS')).find(producto => producto.id === productoId)

	if (JSON.parse(localStorage.getItem('arrayWishlist')).find(producto => producto.id === productoId)) {
		alertaProductoCarrito(`${productoAlerta.marca}`, `${productoAlerta.modelo}`, 'existWishlist')
	} else {
		productoAgregado.push(JSON.parse(localStorage.getItem('PRODUCTOS')).find(producto => producto.id === productoId))
		localStorage.setItem('arrayWishlist', JSON.stringify(productoAgregado))
		listadoProductosWishlist(JSON.parse(localStorage.getItem('arrayWishlist')))
		alertaProductoCarrito(`${productoAlerta.marca}`, `${productoAlerta.modelo}`, 'addWishlist')
		animarWishlistIcon()
	}
}

// FUNCIÓN REMOVE FROM WISHLIST.
const eliminarProductosWishlist = productoId => {
	const arrayWishlistSinProductoEliminado = JSON.parse(localStorage.getItem('arrayWishlist')).filter(producto => producto.id != productoId )
	localStorage.setItem('arrayWishlist', JSON.stringify(arrayWishlistSinProductoEliminado))
	listadoProductosWishlist(JSON.parse(localStorage.getItem('arrayWishlist')))
	let productoAlerta = {}
	productoAlerta = JSON.parse(localStorage.getItem('PRODUCTOS')).find(producto => producto.id === productoId)
	alertaProductoCarrito(`${productoAlerta.marca}`, `${productoAlerta.modelo}`, 'removeWishlist')
}

// FUNCIÓN MOVER PRODUCTO DE WISHLIST AL CART.
const moverProductoDeWishlistAlCart = productoId => {
	let productoMoverWishlist = {}
	productoMoverWishlist = JSON.parse(localStorage.getItem('PRODUCTOS')).find(producto => producto.id === productoId)
	const arrayCart = JSON.parse(localStorage.getItem('arrayCarrito'))
	arrayCart.push(productoMoverWishlist)
	localStorage.setItem('arrayCarrito', JSON.stringify(arrayCart))
	listadoProductosCart(JSON.parse(localStorage.getItem('arrayCarrito')))
	shoppingCartCount(JSON.parse(localStorage.getItem('arrayCarrito')))
	animarCartCount()
	let productoAlerta = {}
	productoAlerta = JSON.parse(localStorage.getItem('PRODUCTOS')).find(producto => producto.id === productoId)
	alertaProductoCarrito(`${productoAlerta.marca}`, `${productoAlerta.modelo}`, 'movedToCart')
	const arrayWishlistSinProductoMovidoAlCart = JSON.parse(localStorage.getItem('arrayWishlist')).filter(producto => producto.id != productoId )
	localStorage.setItem('arrayWishlist', JSON.stringify(arrayWishlistSinProductoMovidoAlCart))
	listadoProductosWishlist(JSON.parse(localStorage.getItem('arrayWishlist')))
}

// ANIMACIÓN WISHLIST ICON.
const animarWishlistIcon = () => {
	const iconScaling = [ { transform: 'scale(1)' }, { transform: 'scale(1.5)' }, { transform: 'scale(1)' } ]
	const scalingTiming = { duration: 350, iterations: 1 }
	const wishlistIcon = document.querySelector('#wishlistIcon')
	wishlistIcon.animate(iconScaling, scalingTiming)
}

////////////////////////////////////////////////////////////////////////////////////////////////////

// FUNCIÓN MOVER PRODUCTO DEL CART A WISHLIST.
const moverProductoDeCartAWishlist = productoId => {
	let productoMoverCart = {}
	productoMoverCart = JSON.parse(localStorage.getItem('PRODUCTOS')).find(producto => producto.id === productoId)
	const arrayWishlist = JSON.parse(localStorage.getItem('arrayWishlist'))
	arrayWishlist.push(productoMoverCart)
	localStorage.setItem('arrayWishlist', JSON.stringify(arrayWishlist))
    listadoProductosWishlist(JSON.parse(localStorage.getItem('arrayWishlist')))
	let productoAlerta = {}
	productoAlerta = JSON.parse(localStorage.getItem('PRODUCTOS')).find(producto => producto.id === productoId)
	alertaProductoCarrito(`${productoAlerta.marca}`, `${productoAlerta.modelo}`, 'movedToWishlist')
	const arrayCartSinProductoMovidoAWishlist = JSON.parse(localStorage.getItem('arrayCarrito')).filter(producto => producto.id != productoId )
	localStorage.setItem('arrayCarrito', JSON.stringify(arrayCartSinProductoMovidoAWishlist))
	listadoProductosCart(JSON.parse(localStorage.getItem('arrayCarrito')))
    shoppingCartCount(JSON.parse(localStorage.getItem('arrayCarrito')))
}

////////////////////////////////////////////////////////////////////////////////////////////////////

// BÚSQUEDA DE PRODUCTOS (MARCA O MODELO).
const filterByName = (e) => {
    const arraySearch = []
    const searchTerm = e.target.value.toLowerCase();
    const productFiltersBar = document.querySelector('#productFiltersBar')

    JSON.parse(localStorage.getItem('PRODUCTOS')).forEach(producto => {
        if (producto.marca.toLowerCase().includes(searchTerm) || producto.modelo.toLowerCase().includes(searchTerm)) {
            arraySearch.push(producto)
            cargaGrillaDeProductos(arraySearch, false)
        }
    })

    !e.target.value.length ? productFiltersBar.classList.remove('pointer-events-none', 'opacity-25') : productFiltersBar.classList.add('pointer-events-none', 'opacity-25')
}

document.getElementById('searchInput').addEventListener('input', filterByName)

////////////////////////////////////////////////////////////////////////////////////////////////////

// FINALIZAR COMPRA.
const FINALIZARCOMPRA = document.createElement('div')
FINALIZARCOMPRA.setAttribute('id', 'finalizarCompra')
FINALIZARCOMPRA.className += 'relative z-50'
FINALIZARCOMPRA.innerHTML += `
    <div aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 transition-opacity bg-gray-700 bg-opacity-90"></div>
        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                    <div>
                        <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                            <svg class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </div>
                        <div class="mt-3 text-center sm:mt-5">
                            <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">¡Compra finalizada con éxito!</h3>
                            <div class="mt-2">
                                <p class="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-5 sm:mt-6">
                        <button type="button" onclick="location.reload();limpiarCarrito()" class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" title="Volver A Listado">Volver A Listado</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
`

document.getElementById('finalizarCompraBoton').addEventListener('click', () => {
    MAIN.innerHTML = ''
    MAIN.append(FINALIZARCOMPRA)
})

////////////////////////////////////////////////////////////////////////////////////////////////////