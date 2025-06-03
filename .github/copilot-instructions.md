# Blue Whales Team Building Website - Copilot Instructions

## Yêu cầu ban đầu
-   trang web giới thiệu về một team, phục vụ cho chương trình team building của công ty.
-   team tên là "Blue Whales",
-   slogans là "🐋 Ẩn mình để lớn mạnh 🐋 Đổi mới để dẫn đầu 🐋",
-   team gồm 11 người,
-   trang web thiết kế theo hướng hài hước, vui nhộn, dễ thương, có hình ảnh minh họa.
-   chủ đề của trang web là về cá voi xanh, với màu sắc chủ đạo là xanh dương và biển cả.
-   tôi muốn trang web có nền là đại dương, với các hình ảnh cá voi bơi lội, trên những con cá voi có thể có hình ảnh mặt của các thành viên team tôi.
-   tôi muốn trang web có các phần sau:
    -   Giới thiệu về team
    -   Slogan của team
    -   Danh sách thành viên: không ở dạng list bình thường, mà là các hình ảnh cá voi với mặt của các thành viên. có hoạt ảnh bơi lội trong khung cảnh đại dương, bơi qua lại trong màn hình

## Kiến trúc kỹ thuật đã triển khai

### Framework & Tools
- **Next.js 15** với TypeScript
- **Tailwind CSS** cho styling cơ bản
- **SCSS** cho các animations phức tạp
- **Sass package** đã được cài đặt để support SCSS

### Cấu trúc file
```
src/app/
├── page.tsx                 # Main component
├── ocean-animations.scss    # Tất cả animations được tách riêng
├── page_backup.tsx         # Backup version với styled-jsx
└── globals.css             # Global styles
```

### Những lưu ý quan trọng về Animation

#### 1. **Tránh Dynamic CSS Generation**
- ❌ **Không dùng**: Math.random() trong JSX để generate CSS
- ❌ **Không dùng**: useState/useEffect cho animation values
- ✅ **Nên dùng**: Static SCSS values được định nghĩa trước

```scss
// ✅ Đúng cách - Static values
.bubble-1 { left: 5%; animation-delay: 1.2s; }
.bubble-2 { left: 15%; animation-delay: 3.4s; }

// ❌ Sai cách - Dynamic generation
${[...Array(30)].map((_, i) => `
  .bubble-${i + 1} {
    left: ${Math.random() * 100}%;
  }
`).join("")}
```

#### 2. **Hydration Mismatch Prevention**
- Server và client phải render giống hệt nhau
- Tránh any dynamic calculations trong render time
- Sử dụng static values cho tất cả animations

#### 3. **Performance Optimization**
- **CSS-in-JS vs SCSS**: SCSS performance tốt hơn cho complex animations
- **Separate concerns**: Tách animations ra file riêng
- **Static compilation**: SCSS được compile một lần, không re-calculate

### Animation Architecture

#### 4. **Ocean Background Layers**
```tsx
{/* Layer 1: Base ocean gradient */}
<div className="absolute inset-0 bg-gradient-to-b from-cyan-200 to-slate-900"></div>

{/* Layer 2: Middle depth effect */}
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-60"></div>

{/* Layer 3: Deep ocean darkness */}
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-800 to-slate-900 opacity-80"></div>
```

#### 5. **Whale Swimming Pattern**
- **freeSwimming animation**: 20s duration với 11 keyframes
- **Individual timing**: Mỗi whale có delay và duration khác nhau
- **Path variation**: Rotation và translateY để tạo đường bơi tự nhiên
- **Opacity transition**: Fade in/out khi enter/exit screen

#### 6. **Bubble System**
- **30 bubbles** với vị trí và timing được pre-defined
- **3 loại bubble**: 🫧, 💧, ○
- **Varied properties**: Size, opacity, delay, duration khác nhau
- **Continuous loop**: Bubbles nổi từ bottom lên top liên tục

#### 7. **Interactive Effects**
```scss
.team-whale-swimming:hover {
  transform: scale(1.2);
  filter: drop-shadow(0 0 25px rgba(59, 130, 246, 1));
  
  .whale-tooltip {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(1.1);
  }
}
```

### Những vấn đề đã khắc phục

#### 8. **Console Errors**
- ✅ Fixed hydration mismatch bằng cách remove dynamic useState
- ✅ Fixed styled-jsx conflicts bằng cách chuyển sang SCSS
- ✅ Fixed animation performance bằng static values

#### 9. **Cross-browser Compatibility**
- Sử dụng transform thay vì position changes
- CSS custom properties cho dynamic values khi cần
- Fallback cho các browser không support drop-shadow

#### 10. **Responsive Design**
- Ocean background responsive với viewport units (vw, vh)
- Whale sizes scale với text-* classes
- Container responsive với Tailwind breakpoints

### Best Practices đã áp dụng

#### 11. **Code Organization**
```
- Main component (page.tsx): Structure & logic
- SCSS file: All animations & effects  
- Tailwind: Layout & basic styling
- TypeScript: Type safety cho team data
```

#### 12. **Animation Performance**
- **GPU acceleration**: Sử dụng transform thay vì left/top
- **Layer separation**: Mỗi animation layer riêng biệt
- **Timing optimization**: Stagger animations để tránh lag

#### 13. **Maintainability**
- Clear naming convention: `.team-whale-swimming`, `.ocean-current-global`
- Separated concerns: Logic vs styling vs animations
- Documented keyframes với descriptive names

### Command Reference
```bash
# Development
npm run dev

# Build
npm run build

# Install SCSS support
npm install sass
```

### Future Enhancements Ideas
- Add real member photos thay vì emoji avatars
- Implement sound effects for ocean ambiance  
- Add particle system cho enhanced underwater effect
- Mobile-specific optimizations
- Dark/light mode toggle
- More interactive whale behaviors (click events)

---
**Lưu ý cuối**: Luôn prioritize performance và user experience. Animations phải smooth và không làm lag website, đặc biệt trên mobile devices.
