// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const roles = [
  {
    idRole: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    nama_role: 'Pemilik',
  },
  {
    idRole: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    nama_role: 'Pegawai',
  },
];

const users = [
  {
    idUser: '410544b2-4001-4271-9855-fec4b6a6442a',
    idRole: roles [0].idRole, 
    username: 'John Doe',
    email: 'user@nextmail.com',
    password: '123456',
  },

  {
    idUser: '9289119b-e634-4f0a-8860-79c2cbed10ae',
    idRole: roles[1].idRole, 
    username: 'Yaaa',
    email: 'user@nextmail.com',
    password: '123456',
  },

  {
    idUser: '477823da-3f87-48e4-bd28-b4d2f5b85311',
    idRole: roles[1].idRole, 
    username: 'Yooo',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const menus = [
  {
    idMenu: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    namaMenu: 'Nasi Goreng',
    hargaMenu: '10000',
    gambarMenu: 'https://picsum.photos/200/300',
  },  

  {
    idMenu: '9aadf810-3ffe-4c2e-8dcc-3a6c93a8f115',
    namaMenu: 'Terong Goreng',
    hargaMenu: '10000',
    gambarMenu: 'https://picsum.photos/200/300',
  },  
]

const transaksiPenjualans = [
  {
    idTransaksi: 'aad0a3dc-487c-400d-8253-237edd0eabfc',
    idPelanggan: '85aeb087-7898-4cc8-a1b0-c27386229a30',
    idUser: users[0].idUser,
  },
];

const detailTransaksiPenjualans = [
  {
    idDetailTransaksi: 'aad0a3dc-487c-400d-8253-237edd0eabfc',
    idTransaksi: transaksiPenjualans[0].idTransaksi,
    idMenu: menus[0].idMenu,
    idPelanggan: '85aeb087-7898-4cc8-a1b0-c27386229a30',
    idUser: users[0].idUser,
    jumlahMenu: 2,
    totalHarga: 30000,
    tanggalTransaksi: '2022-01-01',
  },
];

const members = [
  {
    idMember: '1ddcefd3-9e58-4a11-a51f-993c9e4d508d',
    namaMember: 'Non-Member',
    diskonMember: 0,
    batasAtasMember: 0,
    batasBawahMember: 0
  },
  {
    idMember: 'b05e2ecf-f7e1-465f-8328-79c671223eaa',
    namaMember: 'Standard',
    diskonMember: 0.5,
    batasAtasMember: 55000,
    batasBawahMember: 50000
  },
];

const pelanggans = [
  {
    idPelanggan: 'f4fd0fa8-3661-4a66-a870-33a96af625f8',
    namaPelanggan: 'John Doe',
    noWA: '0877 8880 0758',
    progressTransaksi: 600000,
    idMember: members[0].idMember,
    idTransaksi: transaksiPenjualans[0].idTransaksi,
  },
];

const bahanBakus = [
  {
    idBahanBaku: 'de2fd2b3-1c5f-4451-bcd5-fa978cb12c9a',
    namaBahanBaku: 'Beras',
    hargaBahanBaku: 50000,
    gambarBahanBaku: 'https://picsum.photos/200/300',
    jumlahBahanBaku: 5,
  },
];

const transaksiPembelians = [
  {
    idTransaksiBeli: '387e10c5-8423-409d-993f-ac6de5460880',
    idUser: users[0].idUser,
    idBahanBaku: bahanBakus[0].idBahanBaku,
  },
];

const detailTransaksiPembelians = [
  {
    idDetailPembelian: '387e10c5-8423-409d-993f-ac6de5460880',
    idTransaksiBeli: transaksiPembelians[0].idTransaksiBeli,
    idBahanBaku: bahanBakus[0].idBahanBaku,
    namaUser: users[0].username,
    jumlahBahanBaku: 2,
    totalHarga: 30000,
    tanggalTransaksi: '2022-01-01',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];


export { users, roles, menus, transaksiPenjualans, detailTransaksiPenjualans, members, pelanggans, bahanBakus, transaksiPembelians, detailTransaksiPembelians, revenue };