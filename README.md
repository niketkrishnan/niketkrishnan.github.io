# Niket Krishnan — Cybersecurity Portfolio

A responsive, single-page portfolio for **Niket Krishnan**, a cybersecurity postgraduate focused on defensive engineering, AI/ML security, cloud attack-path analysis, software supply-chain security, and identity analytics.

The site is intentionally built with plain HTML, CSS, and JavaScript so the content remains fast, inspectable, and easy to maintain.

## What the site communicates

The homepage is designed as a recruiter’s five-minute path through Niket’s work. It introduces the security focus, presents the five defensive portfolio repositories, highlights three research builds, groups the technical toolkit by capability, and closes with accurate education and contact details.

The content is based on the current resume and avoids unsupported production-performance claims. Project descriptions emphasize what each system does, how it is evaluated, and the security boundary around it.

## Design and interaction

- Vibrant dark navy visual system with electric cyan and coral accents.
- Responsive navigation with a mobile menu and anchor-based information architecture.
- Project filters for AI security, cloud and identity, and DevSecOps work.
- Scroll-reveal transitions with a reduced-motion fallback.
- Accessible labels, semantic sections, keyboard-friendly buttons, descriptive link text, and a visible focus-friendly structure.
- Legacy pages redirect to the corresponding section on the redesigned homepage so old links do not lead to stale content.
- Direct email, phone, LinkedIn, and GitHub calls to action instead of a non-delivering form.

## Local preview

From the `Website` directory, run:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173` in a browser. The site does not require a build step or runtime dependencies.

## Structure

```text
Website/
├── index.html          # Single-page portfolio content and semantic structure
├── style.css           # Responsive visual system, layout, components, and motion
├── script.js           # Navigation, project filters, scroll reveal, and year label
├── favicon.svg         # Portfolio mark
├── aboutme.html        # Legacy link redirect to About
├── qualification.html  # Legacy link redirect to Skills
├── projects.html       # Legacy link redirect to Projects
├── hobbies.html        # Legacy link redirect to About
└── contact.html        # Legacy link redirect to Contact
```

## Featured project links

- [Explainable AI SOC Detection](https://github.com/niketkrishnan/explainable-ai-soc)
- [LLM Firewall and RAG Security Lab](https://github.com/niketkrishnan/llm-firewall-rag-security-lab)
- [Cloud Attack-Path Prioritizer](https://github.com/niketkrishnan/cloud-attack-path-prioritizer)
- [SBOM Supply-Chain Intelligence](https://github.com/niketkrishnan/sbom-supply-chain-intelligence)
- [Identity Compromise Detector](https://github.com/niketkrishnan/identity-compromise-detector)
- [Render-Aware Prompt-Injection Defence](https://github.com/niketkrishnan/Render-Aware-Prompt-Injection-Defence)
- [CROSSGAURD cross-layer privilege analysis](https://github.com/niketkrishnan/CROSSGAURD)
