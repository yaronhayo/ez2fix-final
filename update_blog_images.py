import os

repair_files = [
    "garage-door-wont-open.mdx", "noisy-garage-door-fixes.mdx", "opener-remote-not-working.mdx",
    "diagnose-repair-broken-garage-door-spring.md", "garage-door-cable-snapped.mdx",
    "manual-release-cord.mdx", "garage-door-off-track.mdx", "garage-door-sensor-alignment.mdx",
    "garage-door-wont-close-causes-fixes.md"
]

maintenance_files = [
    "tightening-hardware.mdx", "cleaning-garage-door.mdx", "garage-door-balance-test.mdx",
    "how-to-lubricate-garage-door.md", "extending-spring-life.mdx",
    "weatherstripping-replacement.mdx", "seasonal-maintenance-checklist.mdx"
]

installation_files = [
    "standard-garage-door-sizes.mdx", "modern-glass-garage-doors.mdx",
    "garage-door-opener-types.mdx", "preparing-for-installation.mdx",
    "insulated-vs-uninsulated.mdx", "smart-garage-openers.mdx",
    "roi-garage-door-replacement.mdx", "insulating-garage-door.mdx",
    "choosing-new-garage-door.mdx", "garage-security-tips.mdx",
    "welcome-to-ez2fix.mdx"
]

base_path = "src/content/blog"

def update_file(filename, new_image):
    path = os.path.join(base_path, filename)
    try:
        with open(path, "r") as f:
            lines = f.readlines()
        
        with open(path, "w") as f:
            for line in lines:
                if line.strip().startswith("image:"):
                    f.write(f'image: "{new_image}"\n')
                else:
                    f.write(line)
        print(f"Updated {filename}")
    except FileNotFoundError:
        print(f"Error: {filename} not found")

print("Starting update...")

for f in repair_files:
    update_file(f, "/images/blog/repair-placeholder.jpg")

for f in maintenance_files:
    update_file(f, "/images/blog/maintenance-placeholder.jpg")

for f in installation_files:
    update_file(f, "/images/blog/installation-placeholder.jpg")

print("Update complete.")
