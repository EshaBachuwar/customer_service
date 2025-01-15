export default function Loading() {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-3 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-4 space-y-4">
              <div className="h-20 w-20 rounded-full bg-gray-200 animate-pulse mx-auto" />
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3 mx-auto" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 space-y-4">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2" />
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse" />
                  <div className="h-6 bg-gray-200 rounded animate-pulse w-1/2" />
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse" />
                  <div className="h-6 bg-gray-200 rounded animate-pulse w-1/2" />
                </div>
              </div>
            </div>
          </div>
  
          <div className="md:col-span-6">
            <div className="bg-white rounded-lg shadow-sm p-4 space-y-4">
              <div className="flex space-x-4 border-b pb-4">
                <div className="h-8 w-20 bg-gray-200 rounded animate-pulse" />
                <div className="h-8 w-20 bg-gray-200 rounded animate-pulse" />
              </div>
              {[1, 2, 3].map((i) => (
                <div key={i} className="border rounded-lg p-4 space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2" />
                </div>
              ))}
            </div>
          </div>
  
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-4 h-[calc(100vh-200px)]">
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2" />
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-10 bg-gray-200 rounded animate-pulse" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }