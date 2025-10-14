export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-full mx-auto p-[120px]">
        <h1 className="text-4xl font-bold text-center mb-12 text-foreground">
          🎨 Figma Color Palette Showcase edited
        </h1>

        {/* Color Palette Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 ">
          {/* Background */}
          <div className="bg-background border-1 border-border p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Background</h3>
            <div className="text-sm text-muted-foreground mb-2">#FFFFFF</div>
            <p className="text-sm">Main background color</p>
          </div>

          {/* Primary */}
          <div className="bg-primary text-primary-foreground p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Primary</h3>
            <div className="text-sm opacity-80 mb-2">#0A0A0A</div>
            <p className="text-sm">Main brand color</p>
          </div>

          {/* Muted */}
          <div className="bg-muted text-muted-foreground p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Muted</h3>
            <div className="text-sm opacity-80 mb-2">#F5F5F5</div>
            <p className="text-sm">Subtle background</p>
          </div>

          {/* Secondary */}
          <div className="bg-secondary text-foreground p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Secondary</h3>
            <div className="text-sm text-muted-foreground mb-2">#F5F5F5</div>
            <p className="text-sm">Secondary elements</p>
          </div>

          {/* Input */}
          <div className="bg-input text-foreground p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Input</h3>
            <div className="text-sm text-muted-foreground mb-2">#E5E5E5</div>
            <p className="text-sm">Form inputs</p>
          </div>

          {/* Foreground */}
          <div className="bg-foreground text-background p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Foreground</h3>
            <div className="text-sm opacity-80 mb-2">#0A0A0A</div>
            <p className="text-sm">Main text color</p>
          </div>
        </div>

        {/* Interactive Elements */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Interactive Elements</h2>
          <div className="space-y-6">
            {/* Buttons */}
            <div>
              <h3 className="text-lg font-medium mb-4">Buttons</h3>
              <div className="flex gap-4 flex-wrap">
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                  Primary Button
                </button>
                <button className="bg-secondary text-foreground px-6 py-3 rounded-lg hover:bg-muted transition-colors">
                  Secondary Button
                </button>
                <button className="border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                  Outline Button
                </button>
              </div>
            </div>

            {/* Form Elements */}
            <div>
              <h3 className="text-lg font-medium mb-4">Form Elements</h3>
              <div className="max-w-md space-y-4">
                <input
                  type="text"
                  placeholder="Input field"
                  className="w-full bg-input text-foreground px-4 py-3 rounded-lg border-2 border-transparent focus:border-primary focus:outline-none"
                />
                <textarea
                  placeholder="Textarea"
                  rows={3}
                  className="w-full bg-input text-foreground px-4 py-3 rounded-lg border-2 border-transparent focus:border-primary focus:outline-none resize-none"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Card Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                Muted Card
              </h3>
              <p className="text-muted-foreground">
                This card uses the muted background color.
              </p>
            </div>
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                Secondary Card
              </h3>
              <p className="text-muted-foreground">
                This card uses the secondary background color.
              </p>
            </div>
            <div className="bg-background border-2 border-input p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                Bordered Card
              </h3>
              <p className="text-muted-foreground">
                This card has a border using the input color.
              </p>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Typography</h2>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-foreground">
              Heading 1 - Foreground Color
            </h1>
            <h2 className="text-2xl font-semibold text-foreground">
              Heading 2 - Foreground Color
            </h2>
            <h3 className="text-xl font-medium text-foreground">
              Heading 3 - Foreground Color
            </h3>
            <p className="text-base text-foreground">
              Regular paragraph text using foreground color.
            </p>
            <p className="text-sm text-muted-foreground">
              Small text using muted-foreground color for secondary information.
            </p>
          </div>
        </section>

        {/* Status */}
        <div className="bg-muted border border-input text-foreground px-6 py-4 rounded-lg">
          <h3 className="font-semibold mb-2">✅ Color System Status</h3>
          <p className="text-muted-foreground">
            All Figma colors have been successfully implemented in your Tailwind
            configuration!
          </p>
        </div>
      </div>
    </div>
  );
}
