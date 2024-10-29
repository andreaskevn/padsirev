// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type Role = {
  idRole: string;
  nama_role: string;
};

export type User = {
  idUser: string;
  idRole: string;
  username: string;
  email: string;
  password: string;
};

export type Menu = {
  idMenu: string;
  namaMenu: string;
  hargaMenu: number;
  gambarMenu: string;
};

export type TransaksiPenjualan = {
  idTransaksi: string;
  idPelanggan: string;
  idUser: string;
};

export type DetailTransaksiPenjualan = {
  idDetailTransaksi: string,
  idTransaksi: string,
  idMenu: string,
  idPelanggan: string,
  idUser: string,
  jumlahMenu: number,
  totalHarga: number,
  tanggalTransaksi: string,
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
// export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
//   amount: number;
// };

export type Member = {
  idMember: string,
  namaMember: string,
  diskonMember: number,
  batasAtasMember: number,
  batasBawahMember: number,
};

export type Pelanggan = {
  idPelanggan: string,
  namaPelanggan: string,
  noWA: string,
  progressTransaksi: number,
  idMember: string,
  idTransaksi: string,
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type BahanBaku = {
  idBahanBaku: string,
  namaBahanBaku: string,
  hargaBahanBaku: number,
  gambarBahanBaku: string,
  jumlahBahanBaku: number,
};

export type TransaksiPembelian = {
  idTransaksiBeli: string,
  idUser: string,
  idBahanBaku: string,
};

export type DetailTransaksiPembelian = {
  idDetailPembelian: string,
  idTransaksiBeli: string,
  idBahanBaku: string,
  namaUser: string,
  jumlahBahanBaku: number,
  totalHarga: number,
  tanggalTransaksi: string,
};

export type Revenue = {
  month: string;
  revenue: number;
};