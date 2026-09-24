# Các Điều Kiện Tiên Quyết

1. Hiểu biết cơ bản về [ngôn ngữ markdown](https://www.markdownguide.org/basic-syntax/).

2. Bạn sẽ cần tạo một tài khoản [GitHub](https://github.com/) miễn phí nếu chưa có. Chúng tôi khuyên bạn nên sử dụng tên của hệ thống RPG của bạn vì điều này sẽ trở thành một phần của URL mà mọi người sử dụng để truy cập SRD của bạn.

3. Bạn có thể thực hiện toàn bộ quá trình này thông qua trình duyệt mà không cần biết git. Mặc dù việc học GitHub Desktop sẽ cho phép bạn kiểm tra mọi thay đổi cục bộ trước khi triển khai chúng trực tiếp để thế giới nhìn thấy.

> Nếu bạn đã đăng ký một tên miền, bạn có thể sử dụng nó với quy trình này để tạo một SRD giống như tôi đã làm https://srd.7thextinctionrpg.com

# Quy Trình

## Tạo Kho Lưu Trữ trên Github

1. Đăng nhập vào Github

2. Điều hướng đến mẫu công khai https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Nhấp vào "Use this template" (Sử dụng mẫu này)

![Step3](/_media/Step3.png)

4. Chọn "Create a new repository" (Tạo kho lưu trữ mới)

5. Nhập tên kho lưu trữ

![Step5](/_media/Step5.png)

6. Chọn 'Private' (Riêng tư)

7. Chọn 'Create repository' (Tạo kho lưu trữ)

Sẽ mất 5-30 giây để sao chép mẫu, sau đó bạn sẽ có bản sao của riêng mình.

8. Đảm bảo rằng bạn có tệp ".nojekyll", đây là một tệp trống cần thiết khi lưu trữ một trang web trên Github, nếu không SRD sẽ không hiển thị đúng cách. *(Thông báo cho GitHub Pages không chạy các tệp đã xuất bản thông qua Jekyll).*

## Thêm Nội Dung Của Bạn

### Các tệp *.md

Các tệp .md là các tệp markdown, Markdown là một ngôn ngữ đánh dấu nhẹ mà bạn có thể sử dụng để thêm các yếu tố định dạng vào tài liệu văn bản thuần túy. Tùy thuộc vào quy mô nội dung của bạn, bạn có thể đặt tất cả thông tin trò chơi của mình vào một tệp *.md duy nhất, hoặc giống như tôi đã làm tại [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), tạo các tệp riêng biệt cho từng chương. "Sample.md" cung cấp một số ví dụ về định dạng.

Ngôn ngữ Markdown rất dễ học, hãy sử dụng liên kết được cung cấp tại điểm 2 trong phần Các Điều Kiện Tiên Quyết ở trên để xem danh sách đầy đủ các cú pháp.

### _sidebar.md

Đây là menu, ngăn điều hướng ở phía bên trái của trang web. Sau khi bạn đã thêm tệp markdown vào kho lưu trữ của mình, bạn cần thêm tệp đó vào đây để nội dung của nó được bao gồm. Hãy làm theo định dạng hiện có.

## Kích Hoạt Github Pages để Chuyển Kho Lưu Trữ thành Trang Web

1. Trong kho lưu trữ của bạn, nhấp vào 'Settings' (Cài đặt)

![Website-Step1](/_media/Website-Step1.png)

2. Chọn 'Pages' ở menu bên trái

![Website-Step2](/_media/Website-Step2.png)

3. Nếu bạn chưa đặt kho lưu trữ ở chế độ 'public' (công khai), bạn có hai lựa chọn:
    a. Đặt kho lưu trữ ở chế độ công khai, điều này sẽ cho phép bạn sử dụng Github pages để lưu trữ trang web SRD của mình miễn phí.
    b. Nâng cấp tài khoản Github của bạn (tại thời điểm viết bài này, chi phí là 4 đô la một tháng hoặc 48 đô la phí hàng năm).

4. Trong phần 'Branch' (Nhánh), chọn 'main' và nhấp Save (Lưu)

5. Đợi 10-20 giây rồi làm mới trang

6. Bây giờ bạn sẽ thấy URL của mình như https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)

## Thay Đổi Phông Chữ

1. Chỉnh sửa tệp /_assets/Phong Cách.css

2. Trong phần 'body section', bạn sẽ tìm thấy siteFont & headingFont

3. Thay đổi chúng thành các phông chữ bạn muốn sử dụng

## Sử dụng plugin Fontawesome và/hoặc Material Icons để hiển thị các biểu tượng miễn phí trong SRD của bạn

### Fontawesome

Sử dụng Fontawesome để có các biểu tượng miễn phí và biểu tượng động. Người dùng đăng ký có thể sử dụng Pro Icons.

1. Tìm biểu tượng trên [Fontawesome](https://fontawesome.com/icons)
2. Chọn biểu tượng
3. Trong cửa sổ bật lên, dưới tab HTML, sao chép mọi thứ giữa " "

```EXAMPLE
<i Giai Cấp="fa-solid fa-dice-d20"></i>
```

4. Đặt văn bản đã sao chép giữa `:` không có dấu cách

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Sử dụng Material Icons để có thêm các biểu tượng miễn phí.

1. Tìm các biểu tượng trên [Material Icons](https://fonts.google.com/icons)
2. Sao chép & chèn liên kết span web trực tiếp vào các tệp markdown của bạn

```markup
<span Giai Cấp="material-icons">face</span>
```