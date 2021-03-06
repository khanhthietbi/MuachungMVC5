USE [master]
GO
/****** Object:  Database [muachung]    Script Date: 07/13/2015 18:48:42 ******/
CREATE DATABASE [muachung] ON  PRIMARY 
( NAME = N'muachung', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL10_50.MSSQLSERVER\MSSQL\DATA\muachung.mdf' , SIZE = 2048KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'muachung_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL10_50.MSSQLSERVER\MSSQL\DATA\muachung_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [muachung] SET COMPATIBILITY_LEVEL = 100
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [muachung].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [muachung] SET ANSI_NULL_DEFAULT OFF
GO
ALTER DATABASE [muachung] SET ANSI_NULLS OFF
GO
ALTER DATABASE [muachung] SET ANSI_PADDING OFF
GO
ALTER DATABASE [muachung] SET ANSI_WARNINGS OFF
GO
ALTER DATABASE [muachung] SET ARITHABORT OFF
GO
ALTER DATABASE [muachung] SET AUTO_CLOSE OFF
GO
ALTER DATABASE [muachung] SET AUTO_CREATE_STATISTICS ON
GO
ALTER DATABASE [muachung] SET AUTO_SHRINK OFF
GO
ALTER DATABASE [muachung] SET AUTO_UPDATE_STATISTICS ON
GO
ALTER DATABASE [muachung] SET CURSOR_CLOSE_ON_COMMIT OFF
GO
ALTER DATABASE [muachung] SET CURSOR_DEFAULT  GLOBAL
GO
ALTER DATABASE [muachung] SET CONCAT_NULL_YIELDS_NULL OFF
GO
ALTER DATABASE [muachung] SET NUMERIC_ROUNDABORT OFF
GO
ALTER DATABASE [muachung] SET QUOTED_IDENTIFIER OFF
GO
ALTER DATABASE [muachung] SET RECURSIVE_TRIGGERS OFF
GO
ALTER DATABASE [muachung] SET  ENABLE_BROKER
GO
ALTER DATABASE [muachung] SET AUTO_UPDATE_STATISTICS_ASYNC OFF
GO
ALTER DATABASE [muachung] SET DATE_CORRELATION_OPTIMIZATION OFF
GO
ALTER DATABASE [muachung] SET TRUSTWORTHY OFF
GO
ALTER DATABASE [muachung] SET ALLOW_SNAPSHOT_ISOLATION OFF
GO
ALTER DATABASE [muachung] SET PARAMETERIZATION SIMPLE
GO
ALTER DATABASE [muachung] SET READ_COMMITTED_SNAPSHOT OFF
GO
ALTER DATABASE [muachung] SET HONOR_BROKER_PRIORITY OFF
GO
ALTER DATABASE [muachung] SET  READ_WRITE
GO
ALTER DATABASE [muachung] SET RECOVERY FULL
GO
ALTER DATABASE [muachung] SET  MULTI_USER
GO
ALTER DATABASE [muachung] SET PAGE_VERIFY CHECKSUM
GO
ALTER DATABASE [muachung] SET DB_CHAINING OFF
GO
EXEC sys.sp_db_vardecimal_storage_format N'muachung', N'ON'
GO
USE [muachung]
GO
/****** Object:  ForeignKey [FK_Adverts_Users]    Script Date: 07/13/2015 18:48:42 ******/
ALTER TABLE [dbo].[Adverts] DROP CONSTRAINT [FK_Adverts_Users]
GO
/****** Object:  ForeignKey [FK_UserProduct]    Script Date: 07/13/2015 18:48:43 ******/
ALTER TABLE [dbo].[Products] DROP CONSTRAINT [FK_UserProduct]
GO
/****** Object:  ForeignKey [FK_Orders_Products]    Script Date: 07/13/2015 18:48:43 ******/
ALTER TABLE [dbo].[Orders] DROP CONSTRAINT [FK_Orders_Products]
GO
/****** Object:  StoredProcedure [dbo].[SP_DELETE_FROM_CART]    Script Date: 07/13/2015 18:48:43 ******/
DROP PROCEDURE [dbo].[SP_DELETE_FROM_CART]
GO
/****** Object:  StoredProcedure [dbo].[SP_GET_LIST_ORDER]    Script Date: 07/13/2015 18:48:43 ******/
DROP PROCEDURE [dbo].[SP_GET_LIST_ORDER]
GO
/****** Object:  StoredProcedure [dbo].[SP_UP_AMOUNT_LIST_ORDER]    Script Date: 07/13/2015 18:48:43 ******/
DROP PROCEDURE [dbo].[SP_UP_AMOUNT_LIST_ORDER]
GO
/****** Object:  StoredProcedure [dbo].[SP_GET_PRODUCTS_ALL]    Script Date: 07/13/2015 18:48:43 ******/
DROP PROCEDURE [dbo].[SP_GET_PRODUCTS_ALL]
GO
/****** Object:  StoredProcedure [dbo].[SP_GET_PRODUCTS_DELETED]    Script Date: 07/13/2015 18:48:43 ******/
DROP PROCEDURE [dbo].[SP_GET_PRODUCTS_DELETED]
GO
/****** Object:  StoredProcedure [dbo].[SP_GET_PRODUCTS_HOT]    Script Date: 07/13/2015 18:48:43 ******/
DROP PROCEDURE [dbo].[SP_GET_PRODUCTS_HOT]
GO
/****** Object:  StoredProcedure [dbo].[SP_GET_Adverts_RD2]    Script Date: 07/13/2015 18:48:43 ******/
DROP PROCEDURE [dbo].[SP_GET_Adverts_RD2]
GO
/****** Object:  Table [dbo].[Orders]    Script Date: 07/13/2015 18:48:43 ******/
ALTER TABLE [dbo].[Orders] DROP CONSTRAINT [FK_Orders_Products]
GO
DROP TABLE [dbo].[Orders]
GO
/****** Object:  Table [dbo].[Products]    Script Date: 07/13/2015 18:48:43 ******/
ALTER TABLE [dbo].[Products] DROP CONSTRAINT [FK_UserProduct]
GO
DROP TABLE [dbo].[Products]
GO
/****** Object:  Table [dbo].[Adverts]    Script Date: 07/13/2015 18:48:42 ******/
ALTER TABLE [dbo].[Adverts] DROP CONSTRAINT [FK_Adverts_Users]
GO
DROP TABLE [dbo].[Adverts]
GO
/****** Object:  StoredProcedure [dbo].[SP_GET_USERS_ALL]    Script Date: 07/13/2015 18:48:42 ******/
DROP PROCEDURE [dbo].[SP_GET_USERS_ALL]
GO
/****** Object:  StoredProcedure [dbo].[SP_GET_USERS_DELETED]    Script Date: 07/13/2015 18:48:42 ******/
DROP PROCEDURE [dbo].[SP_GET_USERS_DELETED]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 07/13/2015 18:48:42 ******/
DROP TABLE [dbo].[Users]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 07/13/2015 18:48:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[Username] [nvarchar](max) NOT NULL,
	[Password] [nvarchar](max) NOT NULL,
	[Active] [bit] NOT NULL,
	[Avatar] [nvarchar](max) NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Users] ON
INSERT [dbo].[Users] ([UserId], [Username], [Password], [Active], [Avatar]) VALUES (1, N'admin', N'123456', 1, N'001Bulbasaur_AG_anime.png')
INSERT [dbo].[Users] ([UserId], [Username], [Password], [Active], [Avatar]) VALUES (2, N'khanhthietbi', N'123456', 1, N'Anh 3x4.png')
INSERT [dbo].[Users] ([UserId], [Username], [Password], [Active], [Avatar]) VALUES (3, N'thang', N'123', 1, N'10688263_1469083600035747_325598012415053343_o.jpg')
INSERT [dbo].[Users] ([UserId], [Username], [Password], [Active], [Avatar]) VALUES (4, N'nam', N'123', 1, N'default.png')
INSERT [dbo].[Users] ([UserId], [Username], [Password], [Active], [Avatar]) VALUES (5, N'minh', N'123', 1, N'default.png')
INSERT [dbo].[Users] ([UserId], [Username], [Password], [Active], [Avatar]) VALUES (6, N'aido', N'123456', 0, N'default.png')
INSERT [dbo].[Users] ([UserId], [Username], [Password], [Active], [Avatar]) VALUES (12, N'hót gơn', N'123', 0, N'7-cd923.jpg')
SET IDENTITY_INSERT [dbo].[Users] OFF
/****** Object:  StoredProcedure [dbo].[SP_GET_USERS_DELETED]    Script Date: 07/13/2015 18:48:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SP_GET_USERS_DELETED]
AS
BEGIN
	SELECT * FROM Users
	WHERE (Active = 0)
END
GO
/****** Object:  StoredProcedure [dbo].[SP_GET_USERS_ALL]    Script Date: 07/13/2015 18:48:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SP_GET_USERS_ALL]
AS
BEGIN
	SELECT * FROM Users
	WHERE (Active = 1)
END
GO
/****** Object:  Table [dbo].[Adverts]    Script Date: 07/13/2015 18:48:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Adverts](
	[AdvertId] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](255) NULL,
	[AdvertName] [nvarchar](255) NOT NULL,
	[Images1] [nvarchar](max) NULL,
	[Images2] [nvarchar](max) NULL,
	[Images3] [nvarchar](max) NULL,
	[Cost] [decimal](24, 0) NOT NULL,
	[CostSale] [decimal](24, 0) NOT NULL,
	[AdvertContent] [nvarchar](max) NULL,
	[Views] [int] NULL,
	[Address] [nvarchar](max) NOT NULL,
	[Deleted] [bit] NOT NULL,
	[UserId] [int] NOT NULL,
	[Created] [datetime] NULL,
	[Modified] [datetime] NULL,
 CONSTRAINT [PK_Adverts] PRIMARY KEY CLUSTERED 
(
	[AdvertId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Adverts] ON
INSERT [dbo].[Adverts] ([AdvertId], [Title], [AdvertName], [Images1], [Images2], [Images3], [Cost], [CostSale], [AdvertContent], [Views], [Address], [Deleted], [UserId], [Created], [Modified]) VALUES (1, N'Bộ drap cotton Quang Phát', N'Khách hàng Vũng Tàu, Nha Trang, Đà Nẵng nhận hàng từ: 11/07/2015', N'Bo-drap-cotton-Quang-Phat-hoa-van-trang-nha-mang-den-giac-ngu-em-diu-va-ngon-giac (1).jpg', N'bo-drap-cotton.jpg', N'Bo-drap-cotton-Quang-Phat-hoa-van-trang-nha-mang-den-giac-ngu-em-diu-va-ngon-giac.jpg', CAST(550000 AS Decimal(24, 0)), CAST(275000 AS Decimal(24, 0)), N'Ga chống thấm Tumi loại 1 giúp bảo vệ đệm
Chất liệu: nilong cao cấp
Không gây sột soạt khi di chuyển trên giường.
Đường may cẩn thận, chắc chắn.
Màu sắc: đỏ, kẻ, tím than,...
Kích thước: 1,6m x 2m x 10cm
Xuất xứ: Việt Nam.', 11, N'Toàn Quốc : TP Hồ Chí Minh', 0, 1, CAST(0x0000A4C100A090B0 AS DateTime), CAST(0x0000A4D40109933A AS DateTime))
INSERT [dbo].[Adverts] ([AdvertId], [Title], [AdvertName], [Images1], [Images2], [Images3], [Cost], [CostSale], [AdvertContent], [Views], [Address], [Deleted], [UserId], [Created], [Modified]) VALUES (3, N'1', N'1', N'Chrysanthemum.jpg', N'Desert.jpg', N'Hydrangeas.jpg', CAST(1 AS Decimal(24, 0)), CAST(11 AS Decimal(24, 0)), N'1', 123, N'1', 1, 1, CAST(0x0000A4D000F71B38 AS DateTime), NULL)
INSERT [dbo].[Adverts] ([AdvertId], [Title], [AdvertName], [Images1], [Images2], [Images3], [Cost], [CostSale], [AdvertContent], [Views], [Address], [Deleted], [UserId], [Created], [Modified]) VALUES (4, N'Tour Lặn biển chuyên nghiệp kết hợp câu cá 1 ngày', N'Số 5 Lê Văn Thiêm, Thanh Xuân, Hà Nội. Điện thoại: 0438 533 999', N'0.711055001433839737.jpg', N'0.986462001435654228.jpg', N'0.505267001433839738.jpg', CAST(1950000 AS Decimal(24, 0)), CAST(667000 AS Decimal(24, 0)), N'Tour Phú Quốc 1 ngày: Lặn biển kết hợp câu cá dành cho 1 người.
Du ngoạn ngắm nhìn quần đảo với 12 đảo nhỏ.
Tham quan bè cá và câu cá trên biển.
Lặn ngắm san hô với kiếng lặn, ống thở, chân bơi, bình dưỡng khí chuyên nghiệp.
Tắm biển và tham quan Bãi Sao – Bãi biển đẹp nhất Phú Quốc.', 123, N'Phú Quốc', 0, 1, CAST(0x0000A4D001141AD0 AS DateTime), CAST(0x0000A4D40108173E AS DateTime))
INSERT [dbo].[Adverts] ([AdvertId], [Title], [AdvertName], [Images1], [Images2], [Images3], [Cost], [CostSale], [AdvertContent], [Views], [Address], [Deleted], [UserId], [Created], [Modified]) VALUES (5, N'Buffet Nướng & Lẩu bò Kendo 1 tại Royal City', N'B2 – R4 – gian hàng 45 & 46, Royal City. Điện thoại: 04.6664.0095', N'buffet-lau-bo-Kendo-tai-royal-city.jpg', N'buffet-lau-bo-Kendo-tai-royal-city (1).jpg', N'buffet-lau-bo-Kendo-tai-royal-city (2).jpg', CAST(248000 AS Decimal(24, 0)), CAST(168000 AS Decimal(24, 0)), N'Menu buffet đặc biệt hấp dẫn gồm gần 70 món với các món nướng Teppanyaki: ba chỉ bò Mỹ nướng, cổ bò Mỹ nướng, gầu bò, lòng bò, dạ dày bò... các món nhúng lẩu từ bò được nhập khẩu 100% từ Úc, Mỹ: Ba chỉ bò Mỹ, đùi gà, cánh gà, râu mực, tôm, ngao..., các món chiên: tempura rau, gà rán kiểu Nhật, thăn lợn chiên xù... cùng các món tráng miệng phong phú.
Đặc biệt, nhà hàng phục vụ thực khách 03 vị nước lẩu: lẩu Kendo, lẩu kim chi, lẩu chua cay cho bạn thoải mái lựa chọn...
Nhà hàng KENDO 1: Tọa lạc tại Trung tâm thương mại Mang phong cách Nhật Bản ấn tượng và đặc trưng với Buffet các món thịt bò là chủ đạo, cùng nhiều món ấn tượng, đặc trưng khác', 123, N'Hà Nội', 0, 1, CAST(0x0000A4D00151CD58 AS DateTime), CAST(0x0000A4D4010584B5 AS DateTime))
INSERT [dbo].[Adverts] ([AdvertId], [Title], [AdvertName], [Images1], [Images2], [Images3], [Cost], [CostSale], [AdvertContent], [Views], [Address], [Deleted], [UserId], [Created], [Modified]) VALUES (6, N'Tour Singapore - Indonesia - Malaysia 6 ngày 5 đêm - Điểm hot cho du lịch hè', N'Khởi hành từ Hà Nội/TP. Hồ Chí Minh', N'a1.jpg', N'A2.jpg', N'A3.jpg', CAST(14250000 AS Decimal(24, 0)), CAST(10590000 AS Decimal(24, 0)), N'* Tour du lịch Singapore - Indonesia - Malaysia trong 06 ngày 05 đêm cho 01 người, trọn gói vé máy bay khứ hồi, ăn theo chương trình, phòng khách sạn tiêu chuẩn 3 - 4 sao.

* Khám phá nền văn hóa - ẩm thực - tín ngưỡng của Đảo Quốc Sư Tử Singapore và Thiên Đường Nhiệt Đới Malaysia với những công trình kiến trúc bậc thầy cùng sự giao thoa tổng hòa của nhiều nền văn hóa.

* Tham quan các địa điểm nổi bật như: Công viên Sư Tử Biển, Cao nguyên Genting, nhà thờ Thánh Saint Paul, Pháo Đài cổ Bồ Đào Nha...

* Đến Đảo Batam, tham quan Chùa Di Lạc Maha Vihara Dutam, Beng Kong Dry Market, trung Tâm Mua Săm BCS Mall, Nhà Khiêu Vũ...

* Ghé thăm Động Batu có bức tượng Hindu cao nhất châu Á và chinh phục 272 bậc thang và Tháp Đôi Petronas (Petronas Twin Towers) – biểu tượng của thủ đô Kuala Lumpur.', 123, N'Toàn Quốc : 62 Trần Quốc Toản – P. Trần Hưng Đạo – Q. Hoàn Kiếm – Hà Nội', 0, 1, CAST(0x0000A4D401341C90 AS DateTime), CAST(0x0000A4D401345C3C AS DateTime))
SET IDENTITY_INSERT [dbo].[Adverts] OFF
/****** Object:  Table [dbo].[Products]    Script Date: 07/13/2015 18:48:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Products](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ProductId] [nvarchar](50) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Images1] [nvarchar](max) NULL,
	[Images2] [nvarchar](max) NULL,
	[Images3] [nvarchar](max) NULL,
	[Cost] [decimal](24, 0) NOT NULL,
	[CostSale] [decimal](24, 0) NOT NULL,
	[Information] [nvarchar](max) NULL,
	[Views] [int] NULL,
	[ProductHot] [bit] NOT NULL,
	[Address] [nvarchar](max) NOT NULL,
	[ShopName] [nvarchar](max) NULL,
	[Deleted] [bit] NOT NULL,
	[UserId] [int] NOT NULL,
	[Created] [datetime] NULL,
	[Modified] [datetime] NULL,
 CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [IX_FK_UserProduct] ON [dbo].[Products] 
(
	[UserId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Products] ON
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (1, N'BFLN002', N'Buffet lẩu nướng F3 BBQ - Miễn phí Pepsi tươi', N'a (1).JPG', N'a (2).JPG', N'a (3).JPG', CAST(150000 AS Decimal(24, 0)), CAST(140000 AS Decimal(24, 0)), N'Miễn phí Pepsi mát lạnh/voucher - Giải nhiệt mùa hè. Các buổi tối trong tuần và thứ 7, Chủ nhật, các ngày Lễ tết: nhà hàng phục vụ thêm món cá hồi sashimi và bạch tuộc sashimi. Thực đơn phong phú với khoảng 100 món, các món chế biến từ Bò Úc nhập khẩu, Hải sản, thịt gà, thịt dê, thịt heo... với cách ướp đặc biệt. ', 12, 1, N'57 Tuệ Tĩnh, Hai Bà Trưng, Hà Nội', N'Lẩu nướng F3 Nguyễn Phong Sắc', 0, 1, CAST(0x0000A4C100A090B0 AS DateTime), CAST(0x0000A4C100A3BE87 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (2, N'BFLN001', N'Buffet nướng lẩu hải sản kèm đồ uống', N'a (4).JPG', N'a (5).JPG', N'a (6).JPG', CAST(160000 AS Decimal(24, 0)), CAST(150000 AS Decimal(24, 0)), N'Miễn phí 01 Cốc Pepsi tươi hoặc 01 cốc bia tươi/khách. Món nướng đặc trưng: ba chỉ bò Mỹ, dẻ sườn tiêu đen, cá tuyết sốt teriyaki.. Nhiều loại nước lẩu khác nhau: Lẩu hải sản Thái, lẩu bò Mishagi, lẩu kim chi...', 23, 1, N'Số 32 ngõ 92, Nguyễn Khánh Toàn', N'Nhà hàng TBQ', 0, 1, CAST(0x0000A4C000A090B0 AS DateTime), CAST(0x0000A4C100EED692 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (3, N'BFLN003', N'Buffet nướng BBQ tại Sashimi BBQ Garden', N'a (7).JPG', N'a (8).JPG', N'a (9).JPG', CAST(76000 AS Decimal(24, 0)), CAST(60000 AS Decimal(24, 0)), N'Thực đơn gần 120 món ăn khác nhau mang đẳng cấp 5*: quầy Nhật, sò huyết nướng, đùi heo nướng, tôm sú chiên, đà điểu lúc lắc, bê tái chanh... Thứ 7, chủ nhật: thêm món tôm he bỏ lò và ốc hương/đùi cừu nướng. Nhà hàng diện tích hơn 2000m2, được thiết kế theo phong cách hoàng gia , khu vui chơi dành cho trẻ con, bãi đỗ xe rộng rãi.', 112, 0, N'B2 – R4 – gian hàng 45 & 46, Royal City', N'Nhà hàng Sashimi BBQ Garden', 0, 1, CAST(0x0000A4BF00A090B0 AS DateTime), CAST(0x0000A4C20014D534 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (4, N'BTTB001', N'Bánh tráng Trảng Bàng & lẩu cá kèo miền Tây', N'a (10).JPG', N'a (11).JPG', N'a (12).JPG', CAST(80000 AS Decimal(24, 0)), CAST(70000 AS Decimal(24, 0)), N'Thưởng thức 4 món hải sản chế biến theo phong cách đặc biệt: Hàu sốt Mexico, ngao sốt Pháp, tôm cung đình, sò vẹo nướng mỡ hành... 100% các món hải sản tươi sống, được chế biến bởi các đầu bếp Sài Gòn chính hiệu. Quán Ốc Ken có 4 cơ sở tại Hà Nội, Đà Nẵng, Sài Gòn, chuyên các món ốc được chế biến kiểu Nam hấp dẫn. Không gian ấm cúng trong nhà và không gian ngoài trời thoáng đãng.', 68, 1, N'47 Nguyên Hồng, Đống Đa, Hà Nội', N'Nhà hàng Bác Sĩ Quán', 0, 1, CAST(0x0000A4BE00A090B0 AS DateTime), CAST(0x0000A4C20014D534 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (5, N'HQST002', N'1 kg hoa quả sấy thập cẩm thơm ngon', N'a (13).JPG', N'a (14).JPG', N'a (15).JPG', CAST(90000 AS Decimal(24, 0)), CAST(80000 AS Decimal(24, 0)), N'Hoa quả sấy được sấy theo công nghệ li tâm không đường có vị ngọt thơm tự nhiên, gồm các loại hoa quả chuối, mít , khoai môn, khoai lang tím khoai lang vàng cà rốt đậu bắp và khổ qua.
Xuất xứ: Việt Nam
Trọng lượng: 1kg
Ngày sản xuất: 24/2/2015 - Hạn sử dụng: 24/2/2016
Rất tốt cho sức khỏe (không có nhiều đường như mứt). ​Thích hợp làm quà tặng, dùng ăn vặt...', 76, 1, N' Tầng 5 Pico - 173 Xuân Thủy', N'Nhà hàng La Bicicleta', 0, 1, CAST(0x0000A4BD00A090B0 AS DateTime), CAST(0x0000A4C20014D534 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (6, N'SATBN01', N'Set ăn kiểu Tây Ban Nha tại nhà hàng La Bicicleta', N'a (16).JPG', N'a (17).JPG', N'a (18).JPG', CAST(80000 AS Decimal(24, 0)), CAST(70000 AS Decimal(24, 0)), N'2 loại miếng dày và miếng mỏng dùng cho món nướng hoặc lẩu cho khách hàng lựa chọn.
Thịt mềm với những dải mỡ và nạc xen kẽ nhau tạo độ ngọt.
Giàu chất bổ dưỡng, cung cấp một lượng lớn các chất dinh dưỡng thiết yếu và một lượng calorie tương đối nhỏ.
Xuất xứ: Mỹ
Quy cách đóng gói: 1 kg (2 khay)
NSX: 15/04/2015 Hạn sử dụng: 06 tháng kể từ ngày sản xuất
Bảo quản: - 18 độ C', 98, 1, N'Số 9 Nguyễn Khánh Toàn, Cầu Giấy', N'Fresh Garden', 0, 1, CAST(0x0000A4C200A090B0 AS DateTime), CAST(0x0000A4C20014D534 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (7, N'TTDO002', N'Thưởng thức đồ uống & bánh mỳ kẹp tại Fresh Garden', N'a (19).JPG', N'a (20).JPG', N'a (21).JPG', CAST(70000 AS Decimal(24, 0)), CAST(60000 AS Decimal(24, 0)), N'Bộ sưu tập đồng hồ kèm decal giúp tô điểm cho nhà bạn thêm đẹp mắt hơn. Sản phẩm có thiết kế các phần riêng lẻ, dán lên như tranh, không viền trắng, có thể bóc ra dễ dàng, thi công đơn giản. Dễ dàng cọ rửa bề mặt bằng xà phòng, nước, khăn ướt, khả năng chịu kiềm, axit tốt. Sản phẩm thích hợp sử dụng ở phòng khách, phòng đọc sách, phòng ngủ và phòng ăn.', 12, 1, N'Purest Spa, 63, Thái Thịnh 2, Đống Đa', N'Spa & Hair Salon Seoul', 1, 1, CAST(0x0000A4C100A090B0 AS DateTime), CAST(0x0000A4C20014D534 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (8, N'BTNG001', N'3 túi nước giặt Fineline Thái Lan (900ml/ 1 gói)', N'a (22).JPG', N'a (23).JPG', N'a (24).JPG', CAST(65000 AS Decimal(24, 0)), CAST(61200 AS Decimal(24, 0)), N'Combo gồm 1 ly kem hoặc 4 chiếc bánh ngọt, vé vườn cổ tích, xèng chơi game. Kungfu Game tọa lạc tại tầng 3 trung tâm thương mại Hàng Da, được trang bị rất nhiều máy móc hiện đại, là trung tâm game lớn ở Hà Nội với hàng trăm trò chơi thú vị đầy hấp dẫn. Avem Coffee tọa lạc tại tầng 3 trung tâm thương mại Hàng Da, không gian đậm chất nước Anh, thưởng thức kem mát lạnh và ngắm nhìn Hà Nội qua những ô cửa sổ lớn.', 23, 1, N'17 Đại La, Hai bà Trưng, Hà Nội- ', N'Purest Hạnh Hương Spa', 0, 1, CAST(0x0000A4BF009B1270 AS DateTime), CAST(0x0000A4C20014D534 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (9, N'MLSC021', N'Máy làm sữa chua đa năng KIKO - hàng Việt Nam', N'a (25).JPG', N'a (26).JPG', N'a (27).JPG', CAST(77000 AS Decimal(24, 0)), CAST(71500 AS Decimal(24, 0)), N'Sữa bột Oldenburger cao năng lượng, giàu protein và canxi, được bổ sung hơn 25 loại vitamin và khoáng chất giúp cơ thể phát triển cân đối, khỏe mạnh, trí tuệ minh mẫn. Không có chất bảo quản, không chất phụ gia. Được sản xuất, đóng hộp và tiệt trùng ở nhiệt độ cao trên dây chuyền hiện đại. Phù hợp với mọi lứa tuổi.', 55, 0, N'Số 19, đường số 9, tầng hầm B1, TTTM Times city 458 Minh Khai, HBT', N'Nha Khoa Thu Lan', 0, 1, CAST(0x0000A4C100CBF73C AS DateTime), CAST(0x0000A4C20014D534 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (10, N'TDCM212', N'2 túi đựng chăn màn quần áo (tặng kèm 1 túi xách)', N'a (28).JPG', N'a (29).JPG', N'a (30).JPG', CAST(81000 AS Decimal(24, 0)), CAST(75000 AS Decimal(24, 0)), N'Giúp bổ sung chất đạm, chất béo, canxi, magiê… và nhiều loại nguyên tố cần thiết khác cho cơ thể của bạn mỗi ngày.', 28, 0, N'Số 8 đường số 9, TTTM Times City, 458 Minh Khai, Hà Nội', N'Nhà hàng buffet hải sản cao cấp Lã Vọng', 0, 1, CAST(0x0000A4C100A09308 AS DateTime), CAST(0x0000A4C20014D534 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (11, N'DKBP121', N'Đèn kẹp bàn Pixar mẫu mới kèm bóng đèn 5W', N'a (31).JPG', N'a (32).JPG', N'a (33).JPG', CAST(18000 AS Decimal(24, 0)), CAST(16000 AS Decimal(24, 0)), N'Dầu oliu thương hiệu La Pedriza Tây Ban Nha - Một trong những thương hiệu dầu Oliu hàng đầu thế giới hiện nay.', 10, 1, N'809 Giải Phóng, Giáp Bát, Hoàng Mai, Hà Nội', N'Xinh Spa', 0, 1, CAST(0x0000A4C100A09434 AS DateTime), CAST(0x0000A4C20014D534 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (12, N'MXML232', N'Máy xông mặt LAICA - Cho làn da sáng mịn', N'a (34).JPG', N'a (35).JPG', N'a (36).JPG', CAST(210000 AS Decimal(24, 0)), CAST(200000 AS Decimal(24, 0)), N'Sản xuất hoàn toàn từ hạt hướng dương. Giàu Vitamin E, Omega 3, 6 và các axít béo chưa hòa tan làm giảm Cholesterol có tác dụng tốt cho tim mạch, làm đẹp da và tăng sức đề kháng của cơ thể. Dùng để chiên xào, chế biến thực phẩm và thích hợp cho mọi đối tượng.', 112, 1, N'Số 1 dốc Lapho (số 21 Thụy Khuê rẽ vào), Thụy Khuê, Hà Nội', N'Nhà hàng Sườn No.1', 0, 1, CAST(0x0000A4C100A091DC AS DateTime), CAST(0x0000A4C100B38C9D AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (17, N'RONB033', N'Rổ inox 32cm bền đẹp', N'ro-inox-32cm-ben-dep.jpg', N'0.267529001433145081.jpg', N'0.629668001433145080.jpg', CAST(120000 AS Decimal(24, 0)), CAST(72500 AS Decimal(24, 0)), N'Cửa hàng tạp hóa Zamza', 223, 1, N'Thiết kế các lỗ to và đều nhau giúp nhanh róc sạch nước.
Đáy có 3 chân trụ cho rổ cao ráo, sạch sẽ.
Inox dày dặn, chắc chắn.
Đường kính: 32cm
Xuất xứ: Việt Nam', N'Zamza', 0, 2, CAST(0x0000A4C100A091DC AS DateTime), CAST(0x0000A4C100A0A7BD AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (18, N'BLAH001', N'123', NULL, NULL, NULL, CAST(123 AS Decimal(24, 0)), CAST(123 AS Decimal(24, 0)), N'123', NULL, 1, N'123', N'123', 1, 2, CAST(0x0000A4C20014B590 AS DateTime), CAST(0x0000A4C20014D544 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (19, N'TTDO002', N'Quần ngố jean sắc màu trẻ trung', N'a (20).JPG', N'a (21).JPG', N'a (19).JPG', CAST(70000 AS Decimal(24, 0)), CAST(60000 AS Decimal(24, 0)), N'Bộ sưu tập đồng hồ kèm decal giúp tô điểm cho nhà bạn thêm đẹp mắt hơn. Sản phẩm có thiết kế các phần riêng lẻ, dán lên như tranh, không viền trắng, có thể bóc ra dễ dàng, thi công đơn giản. Dễ dàng cọ rửa bề mặt bằng xà phòng, nước, khăn ướt, khả năng chịu kiềm, axit tốt. Sản phẩm thích hợp sử dụng ở phòng khách, phòng đọc sách, phòng ngủ và phòng ăn.', 12, 0, N'Purest Spa, 63, Thái Thịnh 2, Đống Đa', N'Spa & Hair Salon Seoul', 0, 1, CAST(0x0000A4C100A090B0 AS DateTime), CAST(0x0000A4C20014D534 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (20, N'BTNG001', N'02 quần short màu sắc tươi sáng, thời trang', N'a (23).JPG', N'a (22).JPG', N'a (24).JPG', CAST(65000 AS Decimal(24, 0)), CAST(61200 AS Decimal(24, 0)), N'Combo gồm 1 ly kem hoặc 4 chiếc bánh ngọt, vé vườn cổ tích, xèng chơi game. Kungfu Game tọa lạc tại tầng 3 trung tâm thương mại Hàng Da, được trang bị rất nhiều máy móc hiện đại, là trung tâm game lớn ở Hà Nội với hàng trăm trò chơi thú vị đầy hấp dẫn. Avem Coffee tọa lạc tại tầng 3 trung tâm thương mại Hàng Da, không gian đậm chất nước Anh, thưởng thức kem mát lạnh và ngắm nhìn Hà Nội qua những ô cửa sổ lớn.', 23, 0, N'17 Đại La, Hai bà Trưng, Hà Nội- ', N'Purest Hạnh Hương Spa', 0, 1, CAST(0x0000A4BF009B1270 AS DateTime), CAST(0x0000A4C20014D534 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (21, N'GCLSC021', N'Gợi cảm hơn với áo lót đúc 3 dây', N'a (26).JPG', N'a (27).JPG', N'a (25).JPG', CAST(77000 AS Decimal(24, 0)), CAST(71500 AS Decimal(24, 0)), N'Sữa bột Oldenburger cao năng lượng, giàu protein và canxi, được bổ sung hơn 25 loại vitamin và khoáng chất giúp cơ thể phát triển cân đối, khỏe mạnh, trí tuệ minh mẫn. Không có chất bảo quản, không chất phụ gia. Được sản xuất, đóng hộp và tiệt trùng ở nhiệt độ cao trên dây chuyền hiện đại. Phù hợp với mọi lứa tuổi.', 55, 0, N'Số 19, đường số 9, tầng hầm B1, TTTM Times city 458 Minh Khai, HBT', N'Nha Khoa Thu Lan', 0, 1, CAST(0x0000A4C100CBF73C AS DateTime), CAST(0x0000A4C20014D534 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (22, N'HQTB001', N'2 quần legging thun dáng lửng', N'a (12).JPG', N'a (11).JPG', N'a (10).JPG', CAST(80000 AS Decimal(24, 0)), CAST(70000 AS Decimal(24, 0)), N'Thưởng thức 4 món hải sản chế biến theo phong cách đặc biệt: Hàu sốt Mexico, ngao sốt Pháp, tôm cung đình, sò vẹo nướng mỡ hành... 100% các món hải sản tươi sống, được chế biến bởi các đầu bếp Sài Gòn chính hiệu. Quán Ốc Ken có 4 cơ sở tại Hà Nội, Đà Nẵng, Sài Gòn, chuyên các món ốc được chế biến kiểu Nam hấp dẫn. Không gian ấm cúng trong nhà và không gian ngoài trời thoáng đãng.', 68, 0, N'47 Nguyên Hồng, Đống Đa, Hà Nội', N'Nhà hàng Bác Sĩ Quán', 0, 1, CAST(0x0000A4BE00A090B0 AS DateTime), CAST(0x0000A4C20014D534 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (23, N'HQAT002', N'Tông đơ cắt tóc an toàn cho bé yêu', N'a (14).JPG', N'a (15).JPG', N'a (13).JPG', CAST(90000 AS Decimal(24, 0)), CAST(80000 AS Decimal(24, 0)), N'Hoa quả sấy được sấy theo công nghệ li tâm không đường có vị ngọt thơm tự nhiên, gồm các loại hoa quả chuối, mít , khoai môn, khoai lang tím khoai lang vàng cà rốt đậu bắp và khổ qua.
Xuất xứ: Việt Nam
Trọng lượng: 1kg
Ngày sản xuất: 24/2/2015 - Hạn sử dụng: 24/2/2016
Rất tốt cho sức khỏe (không có nhiều đường như mứt). ​Thích hợp làm quà tặng, dùng ăn vặt...', 76, 0, N' Tầng 5 Pico - 173 Xuân Thủy', N'Nhà hàng La Bicicleta', 0, 1, CAST(0x0000A4BD00A090B0 AS DateTime), CAST(0x0000A4C20014D534 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (24, N'BFLN006', N'Bộ đàn và điện thoại Hello Kitty phát nhạc cho bé', N'a (8).JPG', N'a (7).JPG', N'a (9).JPG', CAST(76000 AS Decimal(24, 0)), CAST(60000 AS Decimal(24, 0)), N'Thực đơn gần 120 món ăn khác nhau mang đẳng cấp 5*: quầy Nhật, sò huyết nướng, đùi heo nướng, tôm sú chiên, đà điểu lúc lắc, bê tái chanh... Thứ 7, chủ nhật: thêm món tôm he bỏ lò và ốc hương/đùi cừu nướng. Nhà hàng diện tích hơn 2000m2, được thiết kế theo phong cách hoàng gia , khu vui chơi dành cho trẻ con, bãi đỗ xe rộng rãi.', 112, 0, N'B2 – R4 – gian hàng 45 & 46, Royal City', N'Nhà hàng Sashimi BBQ Garden', 0, 1, CAST(0x0000A4BF00A090B0 AS DateTime), CAST(0x0000A4C20014D534 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (25, N'BFLN022', N'Combo 8 quần dài cotton cho bé sơ sinh', N'a (6).JPG', N'a (5).JPG', N'a (4).JPG', CAST(160000 AS Decimal(24, 0)), CAST(150000 AS Decimal(24, 0)), N'Miễn phí 01 Cốc Pepsi tươi hoặc 01 cốc bia tươi/khách. Món nướng đặc trưng: ba chỉ bò Mỹ, dẻ sườn tiêu đen, cá tuyết sốt teriyaki.. Nhiều loại nước lẩu khác nhau: Lẩu hải sản Thái, lẩu bò Mishagi, lẩu kim chi...', 23, 0, N'Số 32 ngõ 92, Nguyễn Khánh Toàn', N'Nhà hàng TBQ', 0, 1, CAST(0x0000A4C000A090B0 AS DateTime), CAST(0x0000A4C100EED568 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (26, N'HATBN01', N'2 Gói rong sụn 500gram', N'a (16).JPG', N'a (18).JPG', N'a (17).JPG', CAST(80000 AS Decimal(24, 0)), CAST(70000 AS Decimal(24, 0)), N'2 loại miếng dày và miếng mỏng dùng cho món nướng hoặc lẩu cho khách hàng lựa chọn.
Thịt mềm với những dải mỡ và nạc xen kẽ nhau tạo độ ngọt.
Giàu chất bổ dưỡng, cung cấp một lượng lớn các chất dinh dưỡng thiết yếu và một lượng calorie tương đối nhỏ.
Xuất xứ: Mỹ
Quy cách đóng gói: 1 kg (2 khay)
NSX: 15/04/2015 Hạn sử dụng: 06 tháng kể từ ngày sản xuất
Bảo quản: - 18 độ C', 98, 0, N'Số 9 Nguyễn Khánh Toàn, Cầu Giấy', N'Fresh Garden', 0, 1, CAST(0x0000A4C200A090B0 AS DateTime), CAST(0x0000A4C20014D534 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (27, N'YSLN002', N'Yến sào A Hồng 100gram - Tặng 10gram yến huyết', N'a (2).JPG', N'a (1).JPG', N'a (3).JPG', CAST(150000 AS Decimal(24, 0)), CAST(140000 AS Decimal(24, 0)), N'Miễn phí Pepsi mát lạnh/voucher - Giải nhiệt mùa hè. Các buổi tối trong tuần và thứ 7, Chủ nhật, các ngày Lễ tết: nhà hàng phục vụ thêm món cá hồi sashimi và bạch tuộc sashimi. Thực đơn phong phú với khoảng 100 món, các món chế biến từ Bò Úc nhập khẩu, Hải sản, thịt gà, thịt dê, thịt heo... với cách ướp đặc biệt. ', 12, 0, N'57 Tuệ Tĩnh, Hai Bà Trưng, Hà Nội', N'Lẩu nướng F3 Nguyễn Phong Sắc', 0, 1, CAST(0x0000A4C100A090B0 AS DateTime), CAST(0x0000A4C100A3BDF8 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (28, N'TDCM212', N'Tinh dầu vỏ bưởi, dầu cám gạo 100% thiên nhiên', N'a (30).JPG', N'a (28).JPG', N'a (29).JPG', CAST(81000 AS Decimal(24, 0)), CAST(75000 AS Decimal(24, 0)), N'Giúp bổ sung chất đạm, chất béo, canxi, magiê… và nhiều loại nguyên tố cần thiết khác cho cơ thể của bạn mỗi ngày.', 28, 0, N'Số 8 đường số 9, TTTM Times City, 458 Minh Khai, Hà Nội', N'Nhà hàng buffet hải sản cao cấp Lã Vọng', 0, 1, CAST(0x0000A4C100A09308 AS DateTime), CAST(0x0000A4C20014D534 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (29, N'MXML232', N'1kg lạp xưởng tươi Ngôi sao', N'a (36).JPG', N'a (34).JPG', N'a (35).JPG', CAST(210000 AS Decimal(24, 0)), CAST(200000 AS Decimal(24, 0)), N'Sản xuất hoàn toàn từ hạt hướng dương. Giàu Vitamin E, Omega 3, 6 và các axít béo chưa hòa tan làm giảm Cholesterol có tác dụng tốt cho tim mạch, làm đẹp da và tăng sức đề kháng của cơ thể. Dùng để chiên xào, chế biến thực phẩm và thích hợp cho mọi đối tượng.', 112, 0, N'Số 1 dốc Lapho (số 21 Thụy Khuê rẽ vào), Thụy Khuê, Hà Nội', N'Nhà hàng Sườn No.1', 0, 1, CAST(0x0000A4C100A091DC AS DateTime), CAST(0x0000A4C100B38C74 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (30, N'RONB033', N'10 chai nước uống đông trùng hạ thảo Hàn Quốc', N'0.267529001433145081.jpg', N'0.629668001433145080.jpg', N'ro-inox-32cm-ben-dep.jpg', CAST(120000 AS Decimal(24, 0)), CAST(72500 AS Decimal(24, 0)), N'Cửa hàng tạp hóa Zamza', 223, 0, N'Thiết kế các lỗ to và đều nhau giúp nhanh róc sạch nước.
Đáy có 3 chân trụ cho rổ cao ráo, sạch sẽ.
Inox dày dặn, chắc chắn.
Đường kính: 32cm
Xuất xứ: Việt Nam', N'Zamza', 0, 2, CAST(0x0000A4C100A091DC AS DateTime), CAST(0x0000A4C100A0A6F4 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (31, N'DKBP121', N'Tảo bột spirulina nguyên chất', N'a (32).JPG', N'a (31).JPG', N'a (33).JPG', CAST(18000 AS Decimal(24, 0)), CAST(16000 AS Decimal(24, 0)), N'Dầu oliu thương hiệu La Pedriza Tây Ban Nha - Một trong những thương hiệu dầu Oliu hàng đầu thế giới hiện nay.', 10, 0, N'809 Giải Phóng, Giáp Bát, Hoàng Mai, Hà Nội', N'Xinh Spa', 0, 1, CAST(0x0000A4C100A09434 AS DateTime), CAST(0x0000A4C20014D534 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (32, N'SATBN01', N'02 hộp bột đậu nành Trường Xuân hộp 600gr', N'a (18).JPG', N'a (16).JPG', N'a (17).JPG', CAST(80000 AS Decimal(24, 0)), CAST(70000 AS Decimal(24, 0)), N'2 loại miếng dày và miếng mỏng dùng cho món nướng hoặc lẩu cho khách hàng lựa chọn.
Thịt mềm với những dải mỡ và nạc xen kẽ nhau tạo độ ngọt.
Giàu chất bổ dưỡng, cung cấp một lượng lớn các chất dinh dưỡng thiết yếu và một lượng calorie tương đối nhỏ.
Xuất xứ: Mỹ
Quy cách đóng gói: 1 kg (2 khay)
NSX: 15/04/2015 Hạn sử dụng: 06 tháng kể từ ngày sản xuất
Bảo quản: - 18 độ C', 98, 0, N'Số 9 Nguyễn Khánh Toàn, Cầu Giấy', N'Fresh Garden', 0, 1, CAST(0x0000A4C200A090B0 AS DateTime), CAST(0x0000A4C20014D534 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (33, N'BTNG001', N'Chăm sóc Body với muối biển đen tại Danusa Spa', N'a (24).JPG', N'a (23).JPG', N'a (22).JPG', CAST(65000 AS Decimal(24, 0)), CAST(61200 AS Decimal(24, 0)), N'Combo gồm 1 ly kem hoặc 4 chiếc bánh ngọt, vé vườn cổ tích, xèng chơi game. Kungfu Game tọa lạc tại tầng 3 trung tâm thương mại Hàng Da, được trang bị rất nhiều máy móc hiện đại, là trung tâm game lớn ở Hà Nội với hàng trăm trò chơi thú vị đầy hấp dẫn. Avem Coffee tọa lạc tại tầng 3 trung tâm thương mại Hàng Da, không gian đậm chất nước Anh, thưởng thức kem mát lạnh và ngắm nhìn Hà Nội qua những ô cửa sổ lớn.', 23, 0, N'17 Đại La, Hai bà Trưng, Hà Nội- ', N'Purest Hạnh Hương Spa', 0, 1, CAST(0x0000A4BF009B1270 AS DateTime), CAST(0x0000A4C20014D534 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (34, N'BFLN003', N'Trọn gói làm tóc tự tin đón Hè cùng Salon Huấn', N'a (9).JPG', N'a (8).JPG', N'a (7).JPG', CAST(76000 AS Decimal(24, 0)), CAST(60000 AS Decimal(24, 0)), N'Thực đơn gần 120 món ăn khác nhau mang đẳng cấp 5*: quầy Nhật, sò huyết nướng, đùi heo nướng, tôm sú chiên, đà điểu lúc lắc, bê tái chanh... Thứ 7, chủ nhật: thêm món tôm he bỏ lò và ốc hương/đùi cừu nướng. Nhà hàng diện tích hơn 2000m2, được thiết kế theo phong cách hoàng gia , khu vui chơi dành cho trẻ con, bãi đỗ xe rộng rãi.', 112, 0, N'B2 – R4 – gian hàng 45 & 46, Royal City', N'Nhà hàng Sashimi BBQ Garden', 0, 1, CAST(0x0000A4BF00A090B0 AS DateTime), CAST(0x0000A4C20014D534 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (35, N'HQST002', N'Trắng mịn, trẻ hóa da công nghệ geo lạnh USA', N'a (13).JPG', N'a (14).JPG', N'a (15).JPG', CAST(90000 AS Decimal(24, 0)), CAST(80000 AS Decimal(24, 0)), N'Hoa quả sấy được sấy theo công nghệ li tâm không đường có vị ngọt thơm tự nhiên, gồm các loại hoa quả chuối, mít , khoai môn, khoai lang tím khoai lang vàng cà rốt đậu bắp và khổ qua.
Xuất xứ: Việt Nam
Trọng lượng: 1kg
Ngày sản xuất: 24/2/2015 - Hạn sử dụng: 24/2/2016
Rất tốt cho sức khỏe (không có nhiều đường như mứt). ​Thích hợp làm quà tặng, dùng ăn vặt...', 76, 0, N' Tầng 5 Pico - 173 Xuân Thủy', N'Nhà hàng La Bicicleta', 0, 1, CAST(0x0000A4BD00A090B0 AS DateTime), CAST(0x0000A4C20014D534 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (36, N'BTTB001', N'Ổ cắm điện đa năng Nakagami 4 lỗ', N'a (11).JPG', N'a (12).JPG', N'a (18).JPG', CAST(80000 AS Decimal(24, 0)), CAST(70000 AS Decimal(24, 0)), N'Thưởng thức 4 món hải sản chế biến theo phong cách đặc biệt: Hàu sốt Mexico, ngao sốt Pháp, tôm cung đình, sò vẹo nướng mỡ hành... 100% các món hải sản tươi sống, được chế biến bởi các đầu bếp Sài Gòn chính hiệu. Quán Ốc Ken có 4 cơ sở tại Hà Nội, Đà Nẵng, Sài Gòn, chuyên các món ốc được chế biến kiểu Nam hấp dẫn. Không gian ấm cúng trong nhà và không gian ngoài trời thoáng đãng.', 68, 0, N'47 Nguyên Hồng, Đống Đa, Hà Nội', N'Nhà hàng Bác Sĩ Quán', 0, 1, CAST(0x0000A4BE00A090B0 AS DateTime), CAST(0x0000A4C20014D534 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (37, N'BFLN001', N'Máy đo huyết áp điện tử cổ tay Citizen CH-608', N'a (5).JPG', N'a (4).JPG', N'a (6).JPG', CAST(160000 AS Decimal(24, 0)), CAST(150000 AS Decimal(24, 0)), N'Miễn phí 01 Cốc Pepsi tươi hoặc 01 cốc bia tươi/khách. Món nướng đặc trưng: ba chỉ bò Mỹ, dẻ sườn tiêu đen, cá tuyết sốt teriyaki.. Nhiều loại nước lẩu khác nhau: Lẩu hải sản Thái, lẩu bò Mishagi, lẩu kim chi...', 23, 0, N'Số 32 ngõ 92, Nguyễn Khánh Toàn', N'Nhà hàng TBQ', 0, 1, CAST(0x0000A4C000A090B0 AS DateTime), CAST(0x0000A4C100EED568 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (38, N'BFLN002', N'Sim 3G Vinaphone tặng 6.5gb x 12 = 78Gb', N'a (1).JPG', N'a (2).JPG', N'a (3).JPG', CAST(150000 AS Decimal(24, 0)), CAST(140000 AS Decimal(24, 0)), N'Miễn phí Pepsi mát lạnh/voucher - Giải nhiệt mùa hè. Các buổi tối trong tuần và thứ 7, Chủ nhật, các ngày Lễ tết: nhà hàng phục vụ thêm món cá hồi sashimi và bạch tuộc sashimi. Thực đơn phong phú với khoảng 100 món, các món chế biến từ Bò Úc nhập khẩu, Hải sản, thịt gà, thịt dê, thịt heo... với cách ướp đặc biệt. ', 12, 0, N'57 Tuệ Tĩnh, Hai Bà Trưng, Hà Nội', N'Lẩu nướng F3 Nguyễn Phong Sắc', 1, 1, CAST(0x0000A4C100A090B0 AS DateTime), CAST(0x0000A4C100A3BDF8 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (39, N'MLSC021', N'Đèn kẹp bàn Pixar mẫu mới kèm bóng đèn 5W', N'a (27).JPG', N'a (26).JPG', N'a (25).JPG', CAST(77000 AS Decimal(24, 0)), CAST(71500 AS Decimal(24, 0)), N'Sữa bột Oldenburger cao năng lượng, giàu protein và canxi, được bổ sung hơn 25 loại vitamin và khoáng chất giúp cơ thể phát triển cân đối, khỏe mạnh, trí tuệ minh mẫn. Không có chất bảo quản, không chất phụ gia. Được sản xuất, đóng hộp và tiệt trùng ở nhiệt độ cao trên dây chuyền hiện đại. Phù hợp với mọi lứa tuổi.', 55, 0, N'Số 19, đường số 9, tầng hầm B1, TTTM Times city 458 Minh Khai, HBT', N'Nha Khoa Thu Lan', 0, 1, CAST(0x0000A4C100CBF73C AS DateTime), CAST(0x0000A4C20014D534 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (40, N'TDCM212', N'Bộ giá treo đựng đồ nhà bếp gọn gàng, ngăn nắp', N'a (30).JPG', N'a (29).JPG', N'a (12).JPG', CAST(81000 AS Decimal(24, 0)), CAST(75000 AS Decimal(24, 0)), N'Giúp bổ sung chất đạm, chất béo, canxi, magiê… và nhiều loại nguyên tố cần thiết khác cho cơ thể của bạn mỗi ngày.', 28, 0, N'Số 8 đường số 9, TTTM Times City, 458 Minh Khai, Hà Nội', N'Nhà hàng buffet hải sản cao cấp Lã Vọng', 0, 1, CAST(0x0000A4C100A09308 AS DateTime), CAST(0x0000A4C20014D534 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (41, N'MXML232', N'Bộ cờ vua có nam châm hấp dẫn cho cả gia đình', N'a (34).JPG', N'a (35).JPG', N'a (36).JPG', CAST(210000 AS Decimal(24, 0)), CAST(200000 AS Decimal(24, 0)), N'Sản xuất hoàn toàn từ hạt hướng dương. Giàu Vitamin E, Omega 3, 6 và các axít béo chưa hòa tan làm giảm Cholesterol có tác dụng tốt cho tim mạch, làm đẹp da và tăng sức đề kháng của cơ thể. Dùng để chiên xào, chế biến thực phẩm và thích hợp cho mọi đối tượng.', 112, 0, N'Số 1 dốc Lapho (số 21 Thụy Khuê rẽ vào), Thụy Khuê, Hà Nội', N'Nhà hàng Sườn No.1', 0, 1, CAST(0x0000A4C100A091DC AS DateTime), CAST(0x0000A4C100B38C74 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (42, N'DKBP121', N'Bộ 8 túi hút chân không, kèm bơm và khăn lau', N'a (6).JPG', N'a (32).JPG', N'a (33).JPG', CAST(18000 AS Decimal(24, 0)), CAST(16000 AS Decimal(24, 0)), N'Dầu oliu thương hiệu La Pedriza Tây Ban Nha - Một trong những thương hiệu dầu Oliu hàng đầu thế giới hiện nay.', 10, 0, N'809 Giải Phóng, Giáp Bát, Hoàng Mai, Hà Nội', N'Xinh Spa', 0, 1, CAST(0x0000A4C100A09434 AS DateTime), CAST(0x0000A4C20014D534 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (43, N'RONB033', N'Voucher thưởng thức đồ Âu tại Siglo''s House', N'0.629668001433145080.jpg', N'0.267529001433145081.jpg', N'ro-inox-32cm-ben-dep.jpg', CAST(120000 AS Decimal(24, 0)), CAST(72500 AS Decimal(24, 0)), N'Cửa hàng tạp hóa Zamza', 223, 0, N'Thiết kế các lỗ to và đều nhau giúp nhanh róc sạch nước.
Đáy có 3 chân trụ cho rổ cao ráo, sạch sẽ.
Inox dày dặn, chắc chắn.
Đường kính: 32cm
Xuất xứ: Việt Nam', N'Zamza', 0, 2, CAST(0x0000A4C100A091DC AS DateTime), CAST(0x0000A4C100A0A6F4 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (44, N'TTDO002', N'Vui chơi 1 năm tại KizCiti -Thành phố hướng nghiệp', N'a (8).JPG', N'a (20).JPG', N'a (21).JPG', CAST(70000 AS Decimal(24, 0)), CAST(60000 AS Decimal(24, 0)), N'Bộ sưu tập đồng hồ kèm decal giúp tô điểm cho nhà bạn thêm đẹp mắt hơn. Sản phẩm có thiết kế các phần riêng lẻ, dán lên như tranh, không viền trắng, có thể bóc ra dễ dàng, thi công đơn giản. Dễ dàng cọ rửa bề mặt bằng xà phòng, nước, khăn ướt, khả năng chịu kiềm, axit tốt. Sản phẩm thích hợp sử dụng ở phòng khách, phòng đọc sách, phòng ngủ và phòng ăn.', 12, 0, N'Purest Spa, 63, Thái Thịnh 2, Đống Đa', N'Spa & Hair Salon Seoul', 1, 1, CAST(0x0000A4C100A090B0 AS DateTime), CAST(0x0000A4C20014D534 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (45, N'BFLN001', N'Lựa chọn 1 trong 6 món bánh xứ Huế thân thương', N'a (29).JPG', N'a (5).JPG', N'a (6).JPG', CAST(160000 AS Decimal(24, 0)), CAST(150000 AS Decimal(24, 0)), N'Miễn phí 01 Cốc Pepsi tươi hoặc 01 cốc bia tươi/khách. Món nướng đặc trưng: ba chỉ bò Mỹ, dẻ sườn tiêu đen, cá tuyết sốt teriyaki.. Nhiều loại nước lẩu khác nhau: Lẩu hải sản Thái, lẩu bò Mishagi, lẩu kim chi...', 23, 0, N'Số 32 ngõ 92, Nguyễn Khánh Toàn', N'Nhà hàng TBQ', 0, 1, CAST(0x0000A4C000A090B0 AS DateTime), CAST(0x0000A4C100EED568 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (46, N'BFLN003', N'Set hải sản hấp dẫn cho 4 người - NH Ốc Salem', N'a (3).JPG', N'a (8).JPG', N'a (9).JPG', CAST(76000 AS Decimal(24, 0)), CAST(60000 AS Decimal(24, 0)), N'Thực đơn gần 120 món ăn khác nhau mang đẳng cấp 5*: quầy Nhật, sò huyết nướng, đùi heo nướng, tôm sú chiên, đà điểu lúc lắc, bê tái chanh... Thứ 7, chủ nhật: thêm món tôm he bỏ lò và ốc hương/đùi cừu nướng. Nhà hàng diện tích hơn 2000m2, được thiết kế theo phong cách hoàng gia , khu vui chơi dành cho trẻ con, bãi đỗ xe rộng rãi.', 112, 0, N'B2 – R4 – gian hàng 45 & 46, Royal City', N'Nhà hàng Sashimi BBQ Garden', 0, 1, CAST(0x0000A4BF00A090B0 AS DateTime), CAST(0x0000A4C20014D534 AS DateTime))
INSERT [dbo].[Products] ([Id], [ProductId], [Name], [Images1], [Images2], [Images3], [Cost], [CostSale], [Information], [Views], [ProductHot], [Address], [ShopName], [Deleted], [UserId], [Created], [Modified]) VALUES (48, N'BFLN002', N'Voucher Dimsum cao cấp tại nhà hàng Long Đình', N'a (2).JPG', N'a (2).JPG', N'a (13).JPG', CAST(150000 AS Decimal(24, 0)), CAST(140000 AS Decimal(24, 0)), N'Miễn phí Pepsi mát lạnh/voucher - Giải nhiệt mùa hè. Các buổi tối trong tuần và thứ 7, Chủ nhật, các ngày Lễ tết: nhà hàng phục vụ thêm món cá hồi sashimi và bạch tuộc sashimi. Thực đơn phong phú với khoảng 100 món, các món chế biến từ Bò Úc nhập khẩu, Hải sản, thịt gà, thịt dê, thịt heo... với cách ướp đặc biệt. ', 12, 0, N'57 Tuệ Tĩnh, Hai Bà Trưng, Hà Nội', N'Lẩu nướng F3 Nguyễn Phong Sắc', 0, 1, CAST(0x0000A4C100A090B0 AS DateTime), CAST(0x0000A4C100A3BDF8 AS DateTime))
SET IDENTITY_INSERT [dbo].[Products] OFF
/****** Object:  Table [dbo].[Orders]    Script Date: 07/13/2015 18:48:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Orders](
	[OrderId] [int] IDENTITY(1,1) NOT NULL,
	[ProductId] [int] NOT NULL,
	[CustomerPhone] [nvarchar](max) NOT NULL,
	[Amount] [int] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[OrderId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Orders] ON
INSERT [dbo].[Orders] ([OrderId], [ProductId], [CustomerPhone], [Amount], [CreatedDate]) VALUES (20, 10, N'012345678', 48, CAST(0x0000A4D000FFBCF4 AS DateTime))
INSERT [dbo].[Orders] ([OrderId], [ProductId], [CustomerPhone], [Amount], [CreatedDate]) VALUES (22, 1, N'01234567890', 5, CAST(0x0000A4D100AF517F AS DateTime))
INSERT [dbo].[Orders] ([OrderId], [ProductId], [CustomerPhone], [Amount], [CreatedDate]) VALUES (23, 5, N'01234567890', 6, CAST(0x0000A4D100AF6298 AS DateTime))
INSERT [dbo].[Orders] ([OrderId], [ProductId], [CustomerPhone], [Amount], [CreatedDate]) VALUES (24, 4, N'01234567890', 5, CAST(0x0000A4D100E9827C AS DateTime))
INSERT [dbo].[Orders] ([OrderId], [ProductId], [CustomerPhone], [Amount], [CreatedDate]) VALUES (25, 3, N'01234567890', 6, CAST(0x0000A4D100F3A691 AS DateTime))
INSERT [dbo].[Orders] ([OrderId], [ProductId], [CustomerPhone], [Amount], [CreatedDate]) VALUES (26, 35, N'01234567890', 10, CAST(0x0000A4D100FC91F1 AS DateTime))
SET IDENTITY_INSERT [dbo].[Orders] OFF
/****** Object:  StoredProcedure [dbo].[SP_GET_Adverts_RD2]    Script Date: 07/13/2015 18:48:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SP_GET_Adverts_RD2]
AS
BEGIN
	SELECT TOP 3 * FROM Adverts WHERE (Deleted = 0) ORDER BY NEWID()
END
GO
/****** Object:  StoredProcedure [dbo].[SP_GET_PRODUCTS_HOT]    Script Date: 07/13/2015 18:48:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SP_GET_PRODUCTS_HOT]
AS
BEGIN
	SELECT TOP 8 * FROM Products
	WHERE (ProductHot = 1) AND (Deleted = 0)
	ORDER BY NEWID()
END
GO
/****** Object:  StoredProcedure [dbo].[SP_GET_PRODUCTS_DELETED]    Script Date: 07/13/2015 18:48:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SP_GET_PRODUCTS_DELETED]
AS
BEGIN
	SELECT * FROM Products
	WHERE (Deleted = 1)
END
GO
/****** Object:  StoredProcedure [dbo].[SP_GET_PRODUCTS_ALL]    Script Date: 07/13/2015 18:48:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SP_GET_PRODUCTS_ALL]
AS
BEGIN
	SELECT * FROM Products
	WHERE (Deleted = 0)
END
GO
/****** Object:  StoredProcedure [dbo].[SP_UP_AMOUNT_LIST_ORDER]    Script Date: 07/13/2015 18:48:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[SP_UP_AMOUNT_LIST_ORDER]
	@phone nvarchar(50),
	@amount int
AS
BEGIN
	UPDATE Orders SET Amount = Amount+@amount WHERE CustomerPhone = @phone
END
GO
/****** Object:  StoredProcedure [dbo].[SP_GET_LIST_ORDER]    Script Date: 07/13/2015 18:48:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[SP_GET_LIST_ORDER]
	@phone nvarchar(max)
AS
BEGIN
	SELECT p.Id, p.Name,p.CostSale,o.Amount FROM Orders o inner join Products p on o.ProductId = p.Id where o.CustomerPhone = @phone
	SELECT sum(p.CostSale*o.Amount) as SUMCOST FROM Orders o inner join Products p on o.ProductId = p.Id where o.CustomerPhone =  @phone
END
GO
/****** Object:  StoredProcedure [dbo].[SP_DELETE_FROM_CART]    Script Date: 07/13/2015 18:48:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[SP_DELETE_FROM_CART]
	@phone nvarchar(max),
	@id int
AS
BEGIN
	DELETE FROM Orders WHERE (CustomerPhone = @phone) AND (ProductId = @id)
END
GO
/****** Object:  ForeignKey [FK_Adverts_Users]    Script Date: 07/13/2015 18:48:42 ******/
ALTER TABLE [dbo].[Adverts]  WITH CHECK ADD  CONSTRAINT [FK_Adverts_Users] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([UserId])
GO
ALTER TABLE [dbo].[Adverts] CHECK CONSTRAINT [FK_Adverts_Users]
GO
/****** Object:  ForeignKey [FK_UserProduct]    Script Date: 07/13/2015 18:48:43 ******/
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_UserProduct] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([UserId])
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_UserProduct]
GO
/****** Object:  ForeignKey [FK_Orders_Products]    Script Date: 07/13/2015 18:48:43 ******/
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [FK_Orders_Products] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([Id])
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [FK_Orders_Products]
GO
