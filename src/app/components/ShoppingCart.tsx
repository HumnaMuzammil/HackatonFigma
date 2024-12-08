import React from 'react'

function ShoppingCart() {
  return (
    <div>
        <section className="bg-white text-white body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
     
    </div>
    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
              Price
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
              Quantity
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
              Total
            </th>
            {/* <tr>
            <td className="border-t-2 border-gray-200 px-4 py-3">Pro</td>
            <td className="border-t-2 border-gray-200 px-4 py-3">25 Mb/s</td>
            <td className="border-t-2 border-gray-200 px-4 py-3">25 GB</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
              $24
            </td>
            <td className="border-t-2 border-gray-200 w-10 text-center">
              <input name="plan" type="radio" />
            </td>
          </tr> */}
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
              Remove
            </th>
            <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-3">Start</td>
            <td className="px-4 py-3">5 Mb/s</td>
            <td className="px-4 py-3">15 GB</td>
            <td className="px-4 py-3 text-lg text-gray-900">free</td>
            <td className="w-10 text-center">
              <input name="plan" type="radio" />
            </td>
          </tr>
          <tr>
            <td className="border-t-2 border-gray-200 px-4 py-3">Pro</td>
            <td className="border-t-2 border-gray-200 px-4 py-3">25 Mb/s</td>
            <td className="border-t-2 border-gray-200 px-4 py-3">25 GB</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
              $24
            </td>
            <td className="border-t-2 border-gray-200 w-10 text-center">
              <input name="plan" type="radio" />
            </td>
          </tr>
          <tr>
            <td className="border-t-2 border-gray-200 px-4 py-3">Business</td>
            <td className="border-t-2 border-gray-200 px-4 py-3">36 Mb/s</td>
            <td className="border-t-2 border-gray-200 px-4 py-3">40 GB</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
              $50
            </td>
            <td className="border-t-2 border-gray-200 w-10 text-center">
              <input name="plan" type="radio" />
            </td>
          </tr>
          <tr>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
              Exclusive
            </td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
              48 Mb/s
            </td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
              120 GB
            </td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
              $72
            </td>
            <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
              <input name="plan" type="radio" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
        Learn More
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
      <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
        Button
      </button>
    </div>
  </div>
</section>

    </div>
  )
}

export default ShoppingCart