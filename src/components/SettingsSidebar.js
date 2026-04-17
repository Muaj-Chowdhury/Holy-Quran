"use client";
import { useSettings } from "@/context/SettingsContext";

export default function SettingsSidebar() {
  const { settings, updateSetting, isSidebarOpen, toggleSidebar, hasMounted } =
    useSettings();

  return (
    <>
      {/* Overlay - Closes sidebar when clicking outside */}
      <div
        className={`fixed inset-0 bg-black/20 z-40 transition-opacity ${isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={toggleSidebar}
      />

      {/* Sidebar Panel */}
      <aside
        className={`fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold">Display Settings</h2>
            <button
              onClick={toggleSidebar}
              className="text-gray-500 hover:text-black"
            >
              ✕
            </button>
          </div>

          <div className="space-y-8">
            {/* Arabic Font Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Arabic Typeface
              </label>
              <div className="grid grid-cols-2 gap-2">
                {["Amiri", "Lateef"].map((font) => (
                  <button
                    key={font}
                    onClick={() => updateSetting("arabicFont", font)}
                    className={`p-3 border rounded-lg text-sm ${settings.arabicFont === font ? "border-emerald-500 bg-emerald-50 ring-1 ring-emerald-500" : "border-gray-200"}`}
                  >
                    {font}
                  </button>
                ))}
              </div>
            </div>

            {/* Range Sliders with better styling */}
            <div>
              <label className="flex justify-between text-sm font-semibold mb-3">
                <span>Arabic Size</span>
                <span className="text-emerald-600">
                  {/* If not mounted, show the DEFAULT value (32) to match the server.
         After mounting, show the SAVED value from settings. 
      */}
                  {hasMounted ? settings.arabicFontSize : 32}px
                </span>
              </label>
              <input
                type="range"
                min="24"
                max="56"
                step="2"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                value={hasMounted ? settings.arabicFontSize : 32}
                onChange={(e) =>
                  updateSetting("arabicFontSize", parseInt(e.target.value))
                }
              />
            </div>

            <div>
              <label className="flex justify-between text-sm font-semibold mb-3">
                <span>Translation Size</span>
                <span className="text-emerald-600">
                  {settings.translationFontSize}px
                </span>
              </label>
              <input
                type="range"
                min="14"
                max="24"
                step="1"
                // Apply it to the input value too so the slider doesn't jump
                value={hasMounted ? settings.translationFontSize : 18}
                onChange={(e) =>
                  updateSetting("translationFontSize", e.target.value)
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
