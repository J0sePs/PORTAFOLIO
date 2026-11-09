export type TechKind =
  | 'lenguaje'
  | 'framework'
  | 'base de datos'
  | 'infraestructura'
  | 'herramienta'
  | 'ia'
  | 'diseño'
  | 'móvil'
  | 'hardware';

export interface Tech {
  name: string;
  kind: TechKind;
}

/**
 * Catálogo de tecnologías. La clave es el id del símbolo en
 * `/icons/tech-sprite.svg` (id `tech-<clave>`).
 */
export const TECH: Record<string, Tech> = {
  typescript: { name: 'TypeScript', kind: 'lenguaje' },
  javascript: { name: 'JavaScript', kind: 'lenguaje' },
  python: { name: 'Python', kind: 'lenguaje' },
  java: { name: 'Java', kind: 'lenguaje' },
  csharp: { name: 'C#', kind: 'lenguaje' },
  php: { name: 'PHP', kind: 'lenguaje' },
  go: { name: 'Go', kind: 'lenguaje' },
  cplusplus: { name: 'C++', kind: 'lenguaje' },
  c: { name: 'C', kind: 'lenguaje' },
  dart: { name: 'Dart', kind: 'lenguaje' },
  kotlin: { name: 'Kotlin', kind: 'lenguaje' },
  swift: { name: 'Swift', kind: 'lenguaje' },
  html5: { name: 'HTML', kind: 'lenguaje' },
  css: { name: 'CSS', kind: 'lenguaje' },

  angular: { name: 'Angular', kind: 'framework' },
  spring: { name: 'Spring', kind: 'framework' },
  django: { name: 'Django', kind: 'framework' },
  laravel: { name: 'Laravel', kind: 'framework' },
  express: { name: 'Express', kind: 'framework' },
  astro: { name: 'Astro', kind: 'framework' },
  fastapi: { name: 'FastAPI', kind: 'framework' },
  dotnet: { name: '.NET', kind: 'framework' },
  sass: { name: 'Sass', kind: 'framework' },
  tailwindcss: { name: 'Tailwind', kind: 'framework' },
  flutter: { name: 'Flutter', kind: 'móvil' },
  unity: { name: 'Unity', kind: 'herramienta' },
  wordpress: { name: 'WordPress', kind: 'framework' },
  nodedotjs: { name: 'Node.js', kind: 'framework' },

  mysql: { name: 'MySQL', kind: 'base de datos' },
  postgresql: { name: 'PostgreSQL', kind: 'base de datos' },
  mongodb: { name: 'MongoDB', kind: 'base de datos' },
  sqlite: { name: 'SQLite', kind: 'base de datos' },
  redis: { name: 'Redis', kind: 'base de datos' },
  supabase: { name: 'Supabase', kind: 'base de datos' },
  firebase: { name: 'Firebase', kind: 'base de datos' },
  prisma: { name: 'Prisma', kind: 'herramienta' },

  linux: { name: 'Linux', kind: 'infraestructura' },
  ubuntu: { name: 'Ubuntu', kind: 'infraestructura' },
  debian: { name: 'Debian', kind: 'infraestructura' },
  docker: { name: 'Docker', kind: 'infraestructura' },
  kubernetes: { name: 'Kubernetes', kind: 'infraestructura' },
  amazonwebservices: { name: 'AWS', kind: 'infraestructura' },
  googlecloud: { name: 'Google Cloud', kind: 'infraestructura' },
  microsoftazure: { name: 'Azure', kind: 'infraestructura' },
  nginx: { name: 'Nginx', kind: 'infraestructura' },
  apache: { name: 'Apache', kind: 'infraestructura' },
  vercel: { name: 'Vercel', kind: 'infraestructura' },
  cloudflare: { name: 'Cloudflare', kind: 'infraestructura' },
  terraform: { name: 'Terraform', kind: 'infraestructura' },
  ansible: { name: 'Ansible', kind: 'infraestructura' },
  jenkins: { name: 'Jenkins', kind: 'herramienta' },
  grafana: { name: 'Grafana', kind: 'infraestructura' },
  prometheus: { name: 'Prometheus', kind: 'infraestructura' },
  elasticsearch: { name: 'Elasticsearch', kind: 'base de datos' },
  apachekafka: { name: 'Kafka', kind: 'infraestructura' },
  cisco: { name: 'Cisco', kind: 'infraestructura' },
  wireshark: { name: 'Wireshark', kind: 'herramienta' },
  gnubash: { name: 'Bash', kind: 'herramienta' },
  powershell: { name: 'PowerShell', kind: 'herramienta' },

  git: { name: 'Git', kind: 'herramienta' },
  github: { name: 'GitHub', kind: 'herramienta' },
  gitlab: { name: 'GitLab', kind: 'herramienta' },
  npm: { name: 'npm', kind: 'herramienta' },
  vite: { name: 'Vite', kind: 'herramienta' },
  jest: { name: 'Jest', kind: 'herramienta' },
  vitest: { name: 'Vitest', kind: 'herramienta' },
  cypress: { name: 'Cypress', kind: 'herramienta' },
  postman: { name: 'Postman', kind: 'herramienta' },
  jira: { name: 'Jira', kind: 'herramienta' },
  trello: { name: 'Trello', kind: 'herramienta' },
  notion: { name: 'Notion', kind: 'herramienta' },
  figma: { name: 'Figma', kind: 'diseño' },
  blender: { name: 'Blender', kind: 'diseño' },

  tensorflow: { name: 'TensorFlow', kind: 'ia' },
  pytorch: { name: 'PyTorch', kind: 'ia' },
  openai: { name: 'OpenAI', kind: 'ia' },
  huggingface: { name: 'Hugging Face', kind: 'ia' },
  pandas: { name: 'Pandas', kind: 'ia' },
  numpy: { name: 'NumPy', kind: 'ia' },
  jupyter: { name: 'Jupyter', kind: 'ia' },
  scikitlearn: { name: 'scikit-learn', kind: 'ia' },
  langchain: { name: 'LangChain', kind: 'ia' },
  ollama: { name: 'Ollama', kind: 'ia' },
  anthropic: { name: 'Anthropic', kind: 'ia' },
  claude: { name: 'Claude', kind: 'ia' },
  googlegemini: { name: 'Gemini', kind: 'ia' },

  android: { name: 'Android', kind: 'móvil' },
  arduino: { name: 'Arduino', kind: 'hardware' },
  raspberrypi: { name: 'Raspberry Pi', kind: 'hardware' },
  telegram: { name: 'Telegram', kind: 'herramienta' },
  whatsapp: { name: 'WhatsApp', kind: 'herramienta' },
};

export function techInfo(id: string): Tech {
  return TECH[id] ?? { name: id, kind: 'herramienta' };
}

/** Agrupa una lista de ids por categoría, conservando el orden del catálogo. */
export function groupTech(ids: string[]): { kind: TechKind; items: string[] }[] {
  const order: TechKind[] = [
    'lenguaje',
    'framework',
    'base de datos',
    'infraestructura',
    'ia',
    'móvil',
    'hardware',
    'diseño',
    'herramienta',
  ];

  return order
    .map((kind) => ({ kind, items: ids.filter((id) => techInfo(id).kind === kind) }))
    .filter((group) => group.items.length > 0);
}
