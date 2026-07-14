#!/bin/bash
# Generate hero background images for all Techi Champs pages
# Each image is 1344x768 (closest to 16:9 supported by z-ai)

GLOBAL_STYLE="Premium cinematic hero image for a high-end digital and technology agency website. Refined black, graphite, charcoal, soft white, and restrained royal-purple color palette. Mature corporate-tech aesthetic created for founders, executives, marketing directors, and serious business buyers. Realistic materials, elegant lighting, subtle purple reflections, controlled highlights, natural shadows, premium depth, clean composition, and generous negative space for website content. Professional and trustworthy, not childish, not gaming-inspired, not excessively futuristic, and not overloaded with glowing effects. Photorealistic commercial advertising quality, realistic scale, sophisticated art direction, high-end web design campaign, 16:9 ultra-wide composition, no text, no logo, no watermark."

NEGATIVE="No readable text, no misspelled interface content, no company logos, no watermark, no childish visuals, no cartoon style, no gaming setup, no cyberpunk city, no bright neon overload, no excessive purple glow, no glitter, no rainbow gradients, no unrealistic floating devices, no distorted screens, no duplicated objects, no cluttered composition, no cheap stock-photo appearance, no excessive glassmorphism, no holographic humans, no humanoid robots, no low resolution, no overexposure, no visual noise."

OUT_DIR="public/hero-images"
mkdir -p "$OUT_DIR"

generate() {
  local name="$1"
  local prompt="$2"
  local output="$OUT_DIR/${name}.png"
  
  if [ -f "$output" ]; then
    echo "SKIP: $name (already exists)"
    return
  fi
  
  echo "GENERATING: $name"
  z-ai image \
    -p "${prompt} ${GLOBAL_STYLE} ${NEGATIVE}" \
    -o "$output" \
    -s "1344x768" 2>&1 | tail -2
  
  if [ -f "$output" ]; then
    echo "  ✓ Saved: $output"
  else
    echo "  ✗ FAILED: $name"
  fi
}

# 1. Homepage
generate "home" \
"Create a premium cinematic hero background for the homepage of Techi Champs, a digital agency offering website design, branding, mobile application development, digital marketing, e-commerce solutions, and AI automation. Place a sleek modern laptop and smartphone on the right side of an elegant dark studio desk. The screens should display sophisticated abstract digital-product interfaces, analytics, branding layouts, and automation workflows without readable text. Add two or three subtle floating translucent interface panels around the devices to represent design, development, marketing, and AI services. Use a refined black and graphite environment with restrained royal-purple lighting and soft neutral highlights. Add subtle architectural depth, realistic metallic surfaces, controlled reflections, and a softly blurred premium office background. Keep the left 45 percent of the image clean and visually calm for a headline, supporting copy, buttons, ratings, and trust indicators."

# 2. About
generate "about" \
"Create a premium cinematic hero background for the About Us page of a professional digital agency. Show a small senior team of diverse business and technology professionals collaborating around a dark modern conference table in an elegant design studio. They should be reviewing strategy documents, wireframes, brand layouts, and business-performance dashboards on a laptop and tablet. Their body language should feel focused, experienced, collaborative, and confident rather than staged or celebratory. Use a sophisticated black, graphite, white, and restrained-purple theme. Add warm practical office lighting, subtle purple reflections from the screens, realistic glass partitions, dark wood, matte metal, and soft architectural depth. Keep the left side of the image relatively clear for the page headline and CTA."

# 3. Work / Portfolio
generate "work" \
"Create a premium cinematic hero background for the Portfolio and Case Studies page of a digital agency. Show a curated collection of polished digital projects presented across a large desktop screen, tablet, smartphone, and premium printed brand material. Include contrasting examples of a corporate website, SaaS dashboard, e-commerce store, mobile application, and brand identity system. Add a subtle performance-results panel showing abstract growth indicators without readable text. Use black and graphite tones, refined white surfaces, and restrained purple accent lighting. The project collection should feel carefully curated, not crowded. Position the featured work mainly on the right side and keep clean space on the left for the headline and page introduction."

# 4. Process
generate "process" \
"Create a premium cinematic hero background for a digital agency Process page. Visualize a clear end-to-end project journey using elegant connected stages: discovery, strategy, design, development, testing, launch, and optimization. Represent the stages using sophisticated layered interface cards, diagrams, wireframes, code components, quality checks, and performance reporting. Use black, graphite, white, and restrained royal-purple accents with fine connection lines and controlled lighting. Arrange the process visualization on the right side in a clean logical flow. Leave the left side open for the main headline, explanation, and CTA."

# 5. Reviews
generate "reviews" \
"Create a premium cinematic hero image for a Reviews and Client Testimonials page. Show a small group of professional clients or business leaders in a sophisticated office environment, having a positive but natural discussion while reviewing project results on a laptop. Overlay one subtle glass panel showing a high satisfaction rating, review distribution, retention indicator, and business-impact graph without readable brand names. Use a dark graphite environment with soft white highlights, restrained purple accents, realistic skin tones, and warm practical lighting. The visual should feel human, credible, calm, and executive-level. Keep the left side clean for the hero headline and trust statistics."

# 6. FAQ
generate "faq" \
"Create a premium cinematic hero background for a FAQ page of a digital agency. Show an elegant dark desk with a laptop displaying a sophisticated knowledge-base interface with organized question categories and answer panels. Include subtle elements representing help documentation, search functionality, and structured information architecture. Use a calm black and graphite environment, soft white interface panels, restrained purple accents, and warm background practical lighting. Keep the composition welcoming and uncluttered. Leave the left side clear for the headline and FAQ introduction."

# 7. Contact
generate "contact" \
"Create a premium cinematic hero image for a Contact and Free Consultation page. Show an elegant dark desk with a laptop displaying a sophisticated consultation-planning interface. Include subtle elements representing project discovery, scheduling, secure communication, business goals, and recommended next steps. A premium notebook, pen, and smartphone may be placed neatly beside the laptop. Use a calm black and graphite environment, soft white interface panels, restrained purple accents, and warm background practical lighting. Keep the composition welcoming and uncluttered. Leave the left side clear for the consultation headline, benefits, and contact CTA."

# 8. Service: Logo Design
generate "service-logo-design" \
"Create a premium cinematic hero image for a professional Logo Design service page. Show a refined creative process evolving from pencil sketches and geometric construction grids into a polished abstract logo mark. Include a dark sketchbook, precision tools, vector-grid overlays, typography exploration, and premium logo applications on a business card and digital screen. Use black, charcoal, warm white, and restrained purple accents. Keep the scene minimal and sophisticated, with realistic paper texture, matte metal tools, gentle shadows, and controlled cinematic lighting. Position the visual on the right side and leave the left side open for page content."

# 9. Service: Web Development
generate "service-web-development" \
"Create a premium cinematic hero image for a Website Design and Development service page. Show a high-end desktop monitor or laptop displaying a refined modern website interface. Surround it with subtle layers showing wireframes, responsive layouts, component systems, accessibility checks, performance analytics, and mobile adaptation. Show a visual progression from structural wireframe to polished final website, but keep all interface text abstract and unreadable. Use realistic black devices, graphite surfaces, soft white UI elements, and restrained royal-purple highlights. Add subtle code-like patterns and layout grids in the background. Place the main visual on the right and leave generous negative space on the left."

# 10. Service: Mobile App
generate "service-mobile-app" \
"Create a premium cinematic hero image for a Mobile App Development service page. Feature two or three sophisticated smartphones arranged vertically and at slight angles on the right side. Display elegant mobile application screens such as a business dashboard, customer experience flow, transaction screen, booking interface, and analytics overview. Add subtle interface layers showing user journeys, interaction states, app architecture, and cross-platform design. Use a dark graphite environment with matte-black devices, soft white interface elements, and restrained purple accents. Include subtle reflections on glass and metal, realistic shadows, and premium studio lighting. Keep the left side clear for website text and CTAs."

# 11. Service: Digital Marketing
generate "service-digital-marketing" \
"Create a premium cinematic hero image for a Digital Marketing service page. Show a sophisticated marketing-performance environment with an elegant analytics dashboard, campaign growth chart, audience segmentation panel, conversion funnel, lead-generation indicators, and content-performance data displayed across a laptop and a few subtle floating panels. Use a black, graphite, white, and restrained-purple palette. Include controlled green or neutral-positive indicators only in very small amounts for performance data. Use realistic studio lighting and a professional office background with soft focus. Place the main dashboard visual on the right and preserve negative space on the left."

# 12. Service: AI Automation
generate "service-ai-automation" \
"Create a premium cinematic hero background for an AI Solutions and Business Automation service page. Visualize an intelligent business-automation ecosystem using connected workflow nodes, data pipelines, task modules, decision points, AI-assisted analysis panels, and integrations between sales, customer support, operations, and reporting. Include one subtle central intelligence core represented through elegant geometry rather than a robot face or human brain. Use a dark black and graphite environment, soft white information panels, and restrained royal-purple illumination. Add subtle depth, glass surfaces, fine connection lines, and controlled motion-like energy. Keep the left side clear for the title, description, and CTA."

# 13. Service: Brand Strategy
generate "service-brand-strategy" \
"Create a premium cinematic hero background for a Branding and Identity service page. Show an elegant brand identity presentation arranged across a sophisticated dark studio surface. Include logo construction sheets, typography specimens, restrained color swatches, business cards, premium packaging, letterhead, digital brand guidelines, and a tablet displaying a polished brand system. Use black, warm white, graphite, and controlled royal-purple accents. Introduce subtle metallic details and soft directional lighting that creates depth without glare. The composition should feel editorial, luxurious, orderly, and carefully art-directed. Place the visual arrangement mainly on the right and preserve clean space on the left."

echo ""
echo "=== GENERATION COMPLETE ==="
ls -lh "$OUT_DIR/"
