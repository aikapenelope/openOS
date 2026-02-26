# AikaOS

> Tu equipo de IA privado. Un sistema de agentes inteligentes que corre directamente en tu computadora — automatiza contratos, reportes fiscales, campanas, soporte y mas, sin que tus datos salgan de tu empresa.

<p align="center">
  <img src="./app-demo.gif" alt="Demo de AikaOS" width="800" />
</p>

## Filosofia

- **Local-first**: AikaOS corre en tu maquina. Tus datos nunca salen de tu empresa.
- **Componible**: app de escritorio, conectores de WhatsApp/Slack/Telegram, o servidor. Usa lo que necesites.
- **Extensible**: skills y plugins instalables como modulos.
- **Listo para equipos**: empieza solo, luego comparte. Un comando levanta una instancia compartida al instante.

## Que incluye

- **Modo Host**: corre los agentes localmente en tu computadora.
- **Modo Cliente**: conectate a un servidor AikaOS existente por URL.
- **Sesiones**: crea y selecciona sesiones, envia prompts.
- **Streaming en vivo**: suscripcion SSE para actualizaciones en tiempo real.
- **Plan de ejecucion**: visualiza los pasos del agente como una linea de tiempo.
- **Permisos**: aprueba o deniega acciones del agente (una vez / siempre / denegar).
- **Templates**: guarda y re-ejecuta flujos de trabajo comunes.
- **Gestor de Skills**: instala, lista e importa skills desde OpenPackage.

## Inicio rapido

Descarga el DMG desde [Releases](https://github.com/aikapenelope/openOS/releases) o instala desde el codigo fuente:

### Requisitos

- Node.js + `pnpm`
- Rust toolchain (para Tauri): `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`
- Tauri CLI: `cargo install tauri-cli`
- OpenCode CLI en el PATH: `opencode`

### Instalacion

```bash
pnpm install
```

### Ejecutar (Escritorio)

```bash
pnpm dev
```

### Ejecutar (Solo Web UI)

```bash
pnpm dev:ui
```

## Arquitectura

- En **Modo Host**, AikaOS levanta un stack local y conecta la UI.
  - Runtime por defecto: `openwork` (via `openwork-orchestrator`), que orquesta `opencode`, `openwork-server` y opcionalmente `opencode-router`.
  - Runtime alternativo: `direct`, donde la app de escritorio ejecuta `opencode serve` directamente.

- La UI usa `@opencode-ai/sdk/v2/client` para conectarse al servidor, manejar sesiones, enviar prompts y suscribirse a eventos SSE.

## UIs alternativas

- **OpenCode Router (bot de WhatsApp)**: puente ligero de WhatsApp para un servidor OpenCode.
  - Instalar: `curl -fsSL https://raw.githubusercontent.com/different-ai/opencode-router/dev/install.sh | bash`
  - Configurar: `opencode-router setup`, luego `opencode-router whatsapp login`, luego `opencode-router start`
- **AikaOS Orchestrator (CLI)**: corre OpenCode + servidor AikaOS sin la UI de escritorio.
  - Instalar: `npm install -g openwork-orchestrator`
  - Ejecutar: `openwork start --workspace /ruta/al/workspace --approval auto`

## Comandos utiles

```bash
pnpm dev          # Desarrollo (escritorio)
pnpm dev:ui       # Desarrollo (solo web)
pnpm typecheck    # Verificar tipos
pnpm build        # Build completo
pnpm build:ui     # Build solo web
pnpm test:e2e     # Tests end-to-end
```

## Solucion de problemas

### Linux / Wayland (Hyprland)

Si AikaOS falla al iniciar con errores de WebKitGTK como `Failed to create GBM buffer`, desactiva dmabuf antes de iniciar:

```bash
WEBKIT_DISABLE_DMABUF_RENDERER=1 openwork
```

```bash
WEBKIT_DISABLE_COMPOSITING_MODE=1 openwork
```

## Seguridad

- AikaOS oculta el razonamiento del modelo y metadata sensible de herramientas por defecto.
- El modo Host se conecta solo a `127.0.0.1`.

## Para empresas

AikaOS esta disenado para empresas en Latinoamerica que necesitan automatizar operaciones sin comprometer la privacidad de sus datos. Nosotros lo instalamos, configuramos y mantenemos actualizado.

Contacto: [aikalabs.cc](https://aikalabs.cc)

## Licencia

Propietaria — Copyright (c) 2025 Aika Labs. Todos los derechos reservados.

El codigo fuente esta disponible unicamente por transparencia. No se permite copiar, modificar, distribuir ni usar este software sin consentimiento escrito de Aika Labs.

Porciones de este software derivan de [OpenWork](https://github.com/different-ai/openwork) (MIT License, Different AI). Ver `LICENSE` para detalles completos.
