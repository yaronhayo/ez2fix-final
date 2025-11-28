import os
from PIL import Image
import sys

def optimize_images(directory):
    print(f"Optimizing images in {directory}...")
    
    # Ensure directory exists
    if not os.path.exists(directory):
        print(f"Directory not found: {directory}")
        return

    # Get all files
    files = [f for f in os.listdir(directory) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]
    
    total_saved = 0
    
    for filename in files:
        filepath = os.path.join(directory, filename)
        filename_no_ext = os.path.splitext(filename)[0]
        webp_path = os.path.join(directory, f"{filename_no_ext}.webp")
        
        try:
            with Image.open(filepath) as img:
                # Convert to RGB if necessary (e.g. for PNGs with transparency)
                if img.mode in ('RGBA', 'LA'):
                    background = Image.new('RGB', img.size, (255, 255, 255))
                    background.paste(img, mask=img.split()[-1])
                    img = background
                elif img.mode == 'P':
                    img = img.convert('RGB')
                
                # Save as WebP
                img.save(webp_path, 'WEBP', quality=80)
                
                original_size = os.path.getsize(filepath)
                new_size = os.path.getsize(webp_path)
                saved = original_size - new_size
                total_saved += saved
                
                print(f"Converted {filename}: {original_size/1024:.1f}KB -> {new_size/1024:.1f}KB (Saved {saved/1024:.1f}KB)")
                
        except Exception as e:
            print(f"Error converting {filename}: {e}")

    print(f"\nTotal space saved: {total_saved/1024/1024:.2f} MB")

if __name__ == "__main__":
    target_dir = "public/images/services"
    optimize_images(target_dir)
