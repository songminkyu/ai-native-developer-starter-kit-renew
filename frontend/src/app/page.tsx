import ItemList from '@/components/ItemList';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-12 sm:py-16">
          <div className="text-center space-y-6 animate-fade-in">
            {/* Main Title */}
            <div className="space-y-2">
              <div className="inline-block">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-4">
                  🚀 Production Ready
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                AI Native Developer
                <br />
                <span className="bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">
                  Starter Kit
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl font-medium text-blue-100 max-w-3xl mx-auto">
              ⚡ Powered by Terraform Infrastructure
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-blue-50 max-w-2xl mx-auto leading-relaxed">
              Next.js 14 + Spring Boot + PostgreSQL on AWS ECS
              <br />
              Complete CI/CD with GitHub Actions
            </p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap justify-center gap-3 pt-6">
              <TechBadge icon="⚛️" name="Next.js 14" />
              <TechBadge icon="☕" name="Spring Boot" />
              <TechBadge icon="🐘" name="PostgreSQL" />
              <TechBadge icon="☁️" name="AWS ECS" />
              <TechBadge icon="🏗️" name="Terraform" />
              <TechBadge icon="🔄" name="CI/CD" />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a
                href="https://github.com/dingcodingco/ai-native-developer-starter-kit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-lg text-white hover:bg-white hover:text-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                View on GitHub
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white/30 text-base font-medium rounded-lg text-white hover:bg-white/10 transition-all duration-200"
              >
                Try Demo Below ↓
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div id="demo" className="scroll-mt-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Live Demo</h2>
            <p className="text-gray-600">Simple CRUD application to test your deployment</p>
          </div>
          <ItemList />
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon="🎯"
            title="Production Ready"
            description="Complete CI/CD pipeline with GitHub Actions, AWS ECS, and zero-downtime deployments"
          />
          <FeatureCard
            icon="🏗️"
            title="Infrastructure as Code"
            description="Fully automated infrastructure with Terraform. One command to deploy everything"
          />
          <FeatureCard
            icon="🔒"
            title="Secure by Default"
            description="AWS OIDC authentication, environment variable management, and security best practices"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            Built with ❤️ using{' '}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              Next.js
            </a>
            {', '}
            <a
              href="https://spring.io/projects/spring-boot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300"
            >
              Spring Boot
            </a>
            {', and '}
            <a
              href="https://www.terraform.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300"
            >
              Terraform
            </a>
          </p>
          <p className="text-gray-500 text-sm mt-2">© 2025 AI Native Developer Starter Kit</p>
        </div>
      </footer>
    </div>
  );
}

// Tech Badge Component
function TechBadge({ icon, name }: { icon: string; name: string }) {
  return (
    <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium hover:bg-white/30 transition-colors">
      <span className="mr-2">{icon}</span>
      {name}
    </span>
  );
}

// Feature Card Component
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
