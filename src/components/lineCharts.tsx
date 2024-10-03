export default function lineCharts() {
    return (
        <div>

<div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl">

  <div className="p-5 pb-3 flex justify-between items-center">
    <h2 className="inline-block font-semibold text-gray-800">
      Total sales
    </h2>


    <div className="hs-dropdown [--auto-close:inside] inline-flex">
      <button id="hs-pro-dnic" type="button" className="p-2 inline-flex items-center text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
        <svg className="shrink-0 me-2 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
        Today
        <svg className="shrink-0 ms-1.5 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
      </button>

      <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-[318px] transition-[opacity,margin] duration opacity-0 hidden z-50 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)]" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-dnic">

            <div className="p-3 space-y-0.5">
            
              <div className="grid grid-cols-5 items-center gap-x-3 mx-1.5 pb-3">
       
                <div className="col-span-1">
                  <button type="button" className="size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100" aria-label="Previous">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                  </button>
                </div>
             
                <div className="col-span-3 flex justify-center items-center gap-x-1">
                  <div className="relative">
                    <select data-hs-select='{
                        "placeholder": "Select month",
                        "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
                        "toggleclassNamees": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600 before:absolute before:inset-0 before:z-[1]",
                        "dropdownclassNamees": "mt-2 z-50 w-32 max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300",
                        "optionclassNamees": "p-2 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100",
                        "optionTemplate": "<div className=\"flex justify-between items-center w-full\"><span data-title></span><span className=\"hidden hs-selected:block\"><svg className=\"shrink-0 size-3.5 text-gray-800" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
                      }' className="hidden">
                      <option value="0">January</option>
                      <option value="1">February</option>
                      <option value="2">March</option>
                      <option value="3">April</option>
                      <option value="4">May</option>
                      <option value="5">June</option>
                      <option value="6" selected>July</option>
                      <option value="7">August</option>
                      <option value="8">September</option>
                      <option value="9">October</option>
                      <option value="10">November</option>
                      <option value="11">December</option>
                    </select>
                  </div>

                  <span className="text-gray-800">/</span>

                  <div className="relative">
                    <select data-hs-select='{
                        "placeholder": "Select year",
                        "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
                        "toggleclassNamees": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600 before:absolute before:inset-0 before:z-[1]",
                        "dropdownclassNamees": "mt-2 z-50 w-20 max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300",
                        "optionclassNamees": "p-2 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100",
                        "optionTemplate": "<div className=\"flex justify-between items-center w-full\"><span data-title></span><span className=\"hidden hs-selected:block\"><svg className=\"shrink-0 size-3.5 text-gray-800" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
                      }' className="hidden">
                      <option selected>2023</option>
                      <option>2024</option>
                      <option>2025</option>
                      <option>2026</option>
                      <option>2027</option>
                    </select>
                  </div>
                </div>
             
                <div className="col-span-1 flex justify-end">
                  <button type="button" className=" size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100" aria-label="Next">
                    <svg className="shrink-0 size-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </button>
                </div>
             
              </div>
        
              <div className="flex pb-1.5">
                <span className="m-px w-10 block text-center text-sm text-gray-500">
                  Mo
                </span>
                <span className="m-px w-10 block text-center text-sm text-gray-500">
                  Tu
                </span>
                <span className="m-px w-10 block text-center text-sm text-gray-500">
                  We
                </span>
                <span className="m-px w-10 block text-center text-sm text-gray-500">
                  Th
                </span>
                <span className="m-px w-10 block text-center text-sm text-gray-500">
                  Fr
                </span>
                <span className="m-px w-10 block text-center text-sm text-gray-500">
                  Sa
                </span>
                <span className="m-px w-10 block text-center text-sm text-gray-500">
                  Su
                </span>
              </div>
          
              <div className="flex">
                <div>
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600" disabled>
                    26
                  </button>
                </div>
                <div>
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600" disabled>
                    27
                  </button>
                </div>
                <div>
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600" disabled>
                    28
                  </button>
                </div>
                <div>
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600" disabled>
                    29
                  </button>
                </div>
                <div>
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600" disabled>
                    30
                  </button>
                </div>
                <div>
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600">
                    1
                  </button>
                </div>
                <div>
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600">
                    2
                  </button>
                </div>
              </div>
           
              <div className="flex">
                <div>
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600">
                    3
                  </button>
                </div>
                <div>
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600">
                    4
                  </button>
                </div>
                <div >
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600">
                    5
                  </button>
                </div>
                <div >
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600">
                    6
                  </button>
                </div>
                <div >
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600">
                    7
                  </button>
                </div>
                <div >
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600">
                    8
                  </button>
                </div>
                <div >
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600">
                    9
                  </button>
                </div>
              </div>
           
              <div className="flex">
                <div >
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600">
                    10
                  </button>
                </div>
                <div >
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600">
                    11
                  </button>
                </div>
                <div >
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600">
                    12
                  </button>
                </div>
                <div>
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600">
                    13
                  </button>
                </div>
                <div>
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600">
                    14
                  </button>
                </div>
                <div>
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600">
                    15
                  </button>
                </div>
                <div>
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600">
                    16
                  </button>
                </div>
              </div>
          
              <div className="flex">
                <div>
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600">
                    17
                  </button>
                </div>
                <div>
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600">
                    18
                  </button>
                </div>
                <div>
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600">
                    19
                  </button>
                </div>
                <div>
                  <button type="button" className="m-px size-10 flex justify-center items-center bg-blue-600 border border-transparent text-sm font-medium text-white hover:border-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100">
                    20
                  </button>
                </div>
                <div>
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600">
                    21
                  </button>
                </div>
                <div>
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600">
                    22
                  </button>
                </div>
                <div>
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600">
                    23
                  </button>
                </div>
              </div>
         
              <div className="flex">
                <div>
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600">
                    24
                  </button>
                </div>
                <div >
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600">
                    25
                  </button>
                </div>
                <div >
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600">
                    26
                  </button>
                </div>
                <div >
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600">
                    27
                  </button>
                </div>
                <div >
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600">
                    28
                  </button>
                </div>
                <div >
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600">
                    29
                  </button>
                </div>
                <div >
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600">
                    30
                  </button>
                </div>
              </div>
            
              <div className="flex">
                <div >
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600">
                    31
                  </button>
                </div>
                <div >
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100" disabled>
                    1
                  </button>
                </div>
                <div>
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100" disabled>
                    2
                  </button>
                </div>
                <div>
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100" disabled>
                    3
                  </button>
                </div>
                <div>
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100" disabled>
                    4
                  </button>
                </div>
                <div>
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100" disabled>
                    5
                  </button>
                </div>
                <div>
                  <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100" disabled>
                    6
                  </button>
                </div>
              </div>
         
            </div>

      </div>
    </div>

  </div>



  <div className="h-full pb-5 px-5 space-y-8">
    <h4 className="text-4xl font-medium text-gray-800">
      <span className="-me-1.5 text-sm align-top text-gray-500">$</span>
       43,350
    </h4>


    <ul className="space-y-3">
  
      <li className="flex flex-wrap justify-between items-center gap-x-2">
        <div>
          <div className="flex items-center gap-x-2">
            <div className="inline-block size-2.5 bg-blue-600 rounded-sm"></div>
            <h2 className="inline-block align-middle text-gray-500">
              Store sales
            </h2>
          </div>
        </div>
        <div>
          <span className="text-gray-800">
             $51,392
          </span>
          <span className="ms-3 min-w-[80px] inline-block text-gray-600">
            <svg className="inline-block align-middle size-4 text-teal-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
            38.2%
          </span>
        </div>
      </li>

      <li className="flex flex-wrap justify-between items-center gap-x-2">
        <div>
          <div className="flex items-center gap-x-2">
            <div className="inline-block size-2.5 bg-purple-600 rounded-sm"></div>
            <h2 className="inline-block align-middle text-gray-500">
              Online sales
            </h2>
          </div>
        </div>
        <div>
          <span className="text-gray-800">
             $46,420
          </span>
          <span className="ms-3 min-w-[80px] inline-block text-gray-600">
            <svg className="inline-block align-middle size-4 text-teal-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
            5.9%
          </span>
        </div>
      </li>
   
      <li className="flex flex-wrap justify-between items-center gap-x-2">
        <div>
          <div className="flex items-center gap-x-2">
            <div className="inline-block size-2.5 bg-gray-300 rounded-sm"></div>
            <h2 className="inline-block align-middle text-gray-500">
              Others
            </h2>
          </div>
        </div>
        <div>
          <span className="text-gray-800">
             $39,539
          </span>
          <span className="ms-3 min-w-[80px] inline-block text-gray-600">
            <svg className="inline-block align-middle size-4 text-red-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>
            3.1%
          </span>
        </div>
      </li>

    </ul>

  </div>

  <div className="p-5 pt-0 space-y-8">
    <div className="w-full">

      <div id="hs-total-sales-lines-chart" className="min-h-[115px] "></div>
    </div>
  </div>

</div>

        </div>
     
    );
  }
  