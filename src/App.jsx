import './App.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Cloud, 
  Cog, 
  Users, 
  CheckCircle, 
  Mail, 
  Phone, 
  Linkedin,
  ArrowRight,
  Server,
  Lock,
  Zap,
  Award,
  Globe
} from 'lucide-react'

// Importando as imagens
import heroDevOps from './assets/hero-devops.jpg'
import cloudInfrastructure from './assets/cloud-infrastructure.png'
import cybersecurityShield from './assets/cybersecurity-shield.jpg'
import awsLogo from './assets/aws-logo.png'
import azureLogo from './assets/azure-logo.png'
import gcpLogo from './assets/gcp-logo.png'
import dockerLogo from './assets/docker-logo.png'
import kubernetesLogo from './assets/kubernetes-logo.png'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui seria implementada a lógica de envio do formulário
    console.log('Formulário enviado:', formData)
    alert('Obrigado pelo contato! Entraremos em contato em breve.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
                <Shield className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold text-gray-900">DuDevOps</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors">Sobre</a>
              <a href="#servicos" className="text-gray-700 hover:text-blue-600 transition-colors">Serviços</a>
              <a href="#tecnologias" className="text-gray-700 hover:text-blue-600 transition-colors">Tecnologias</a>
              <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
            </nav>
            <a 
              href="#contato" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroDevOps} 
            alt="DevOps Technology" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Transforme sua infraestrutura com{' '}
              <span className="text-blue-300">DevSecOps</span> de excelência
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
            >
              Soluções completas em automação, segurança e cloud computing para acelerar sua transformação digital
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a 
                href="#contato" 
                className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors inline-flex items-center justify-center"
              >
                Solicite uma Consultoria Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#servicos" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Conheça Nossos Serviços
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sobre a Empresa */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Sobre a DuDevOps Tecnologia e Serviços
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Somos especialistas em acelerar a transformação digital através de práticas DevSecOps avançadas. 
                Nossa missão é fornecer soluções robustas que combinam desenvolvimento, segurança e operações 
                para maximizar a eficiência e confiabilidade dos seus sistemas.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Segurança integrada desde o desenvolvimento</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Automação completa de pipelines CI/CD</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Excelência operacional em ambientes críticos</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={cloudInfrastructure} 
                alt="Cloud Infrastructure" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Fundador */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Conheça o Fundador
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Liderança técnica com experiência comprovada em grandes corporações
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cláudio Francisco Duarte</h3>
              <p className="text-lg text-gray-700 mb-6">
                DevOps/DevSecOps Sênior com mais de 6 anos de experiência em ambientes críticos, 
                incluindo atuação em grandes empresas como Claro Brasil, Capgemini e SOMOS Educação.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <Award className="h-8 w-8 text-blue-600 mb-2" />
                  <h4 className="font-semibold text-gray-900">Certificações</h4>
                  <p className="text-sm text-gray-600">Azure, AWS, Google Cloud, LPIC-1, DevOps Essentials</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <Users className="h-8 w-8 text-green-600 mb-2" />
                  <h4 className="font-semibold text-gray-900">Experiência</h4>
                  <p className="text-sm text-gray-600">6+ anos em DevSecOps e Cloud Computing</p>
                </div>
              </div>
              <div className="flex justify-center lg:justify-start space-x-4">
                <a 
                  href="mailto:duarte.unix@gmail.com" 
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </a>
                <a 
                  href="https://linkedin.com/in/cfduarte" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Users className="h-32 w-32 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Soluções completas para modernizar sua infraestrutura e acelerar seus processos de desenvolvimento
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Cog className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Automação CI/CD</h3>
              <p className="text-gray-600 mb-4">
                Pipelines automatizados com Azure DevOps, GitHub Actions e AWS CodePipeline para integração e entrega contínua.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Configuração de pipelines</li>
                <li>• Testes automatizados</li>
                <li>• Deploy automatizado</li>
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Server className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Infraestrutura como Código</h3>
              <p className="text-gray-600 mb-4">
                Terraform, Ansible, Helm e Flux para ambientes multi-cloud escaláveis e reproduzíveis.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Provisionamento automatizado</li>
                <li>• Versionamento de infraestrutura</li>
                <li>• Ambientes multi-cloud</li>
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Containerização</h3>
              <p className="text-gray-600 mb-4">
                Docker e Kubernetes com administração de clusters Rancher para deploys escaláveis e seguros.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Containerização de aplicações</li>
                <li>• Orquestração Kubernetes</li>
                <li>• Gestão de clusters</li>
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="bg-yellow-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Monitoramento</h3>
              <p className="text-gray-600 mb-4">
                Grafana, Prometheus, CloudWatch e Azure Monitor para observabilidade completa dos seus sistemas.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Dashboards personalizados</li>
                <li>• Alertas inteligentes</li>
                <li>• Análise de performance</li>
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Lock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Segurança DevSecOps</h3>
              <p className="text-gray-600 mb-4">
                SAST/DAST, IAM, WAF e mitigação preventiva de vulnerabilidades integrada ao pipeline.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Análise de segurança automatizada</li>
                <li>• Gestão de identidades</li>
                <li>• Proteção de aplicações</li>
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Cloud className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud Computing</h3>
              <p className="text-gray-600 mb-4">
                Migração para nuvem, otimização de custos e arquitetura multi-cloud (AWS, Azure, GCP).
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Migração para cloud</li>
                <li>• Otimização de custos</li>
                <li>• Arquitetura resiliente</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tecnologias */}
      <section id="tecnologias" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tecnologias e Ferramentas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trabalhamos com as principais tecnologias do mercado para garantir soluções robustas e atualizadas
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <img src={awsLogo} alt="AWS" className="h-16 w-16 mb-4" />
              <span className="text-sm font-medium text-gray-700">Amazon Web Services</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <img src={azureLogo} alt="Azure" className="h-16 w-16 mb-4" />
              <span className="text-sm font-medium text-gray-700">Microsoft Azure</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <img src={gcpLogo} alt="Google Cloud" className="h-16 w-16 mb-4" />
              <span className="text-sm font-medium text-gray-700">Google Cloud</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <img src={dockerLogo} alt="Docker" className="h-16 w-16 mb-4" />
              <span className="text-sm font-medium text-gray-700">Docker</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <img src={kubernetesLogo} alt="Kubernetes" className="h-16 w-16 mb-4" />
              <span className="text-sm font-medium text-gray-700">Kubernetes</span>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">E muitas outras tecnologias:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="bg-gray-100 px-3 py-1 rounded-full">Terraform</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">Ansible</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">Jenkins</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">GitHub Actions</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">Grafana</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">Prometheus</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">Python</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">Shell Script</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Entre em Contato
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Pronto para transformar sua infraestrutura? Vamos conversar sobre como podemos ajudar sua empresa.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-400 mr-4" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <a href="mailto:duarte.unix@gmail.com" className="text-blue-400 hover:text-blue-300">
                      duarte.unix@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-400 mr-4" />
                  <div>
                    <p className="text-white font-medium">Telefones</p>
                    <p className="text-gray-300">61 99909-9834 / 62 99873-7223</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-6 w-6 text-blue-400 mr-4" />
                  <div>
                    <p className="text-white font-medium">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/cfduarte" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      linkedin.com/in/cfduarte
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
                <Shield className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold text-white">DuDevOps Tecnologia e Serviços</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 DuDevOps. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

