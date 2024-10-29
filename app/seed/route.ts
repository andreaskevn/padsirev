import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { users, roles, menus, transaksiPenjualans, detailTransaksiPenjualans, members, pelanggans, bahanBakus, transaksiPembelians, detailTransaksiPembelians, revenue  } from '../lib/placeholder-data';

const client = await db.connect();

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      idUser UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      idRole UUID NOT NULL,
      username VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
        INSERT INTO users (idUser, username, email, password)
        VALUES (${user.idUser}, ${user.username}, ${user.email}, ${hashedPassword})
        ON CONFLICT (idUser) DO NOTHING;
      `;
    })
  );

  return insertedUsers;
}

async function seedRoles() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS roles (
      idRole UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      nama_role VARCHAR(255) NOT NULL
    );
  `;

  const insertedRoles = await Promise.all(
    roles.map((role) =>
      client.sql`
        INSERT INTO roles (idRole, nama_role)
        VALUES (${role.idRole}, ${role.nama_role})
        ON CONFLICT (idRole) DO NOTHING;
      `
    )
  );

  return insertedRoles;
}

  async function seedMenus() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  
    await client.sql`
      CREATE TABLE IF NOT EXISTS menus (
        idMenu UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        namaMenu VARCHAR(255) NOT NULL,
        hargaMenu INTEGER NOT NULL,
        gambarMenu VARCHAR(255) NOT NULL
      );
    `;
  
    const insertedMenus = await Promise.all(
      menus.map(
        (menu) => client.sql`
          INSERT INTO menus (idMenu, namaMenu, hargaMenu, gambarMenu)
          VALUES (${menu.idMenu}, ${menu.namaMenu}, ${menu.hargaMenu}, ${menu.gambarMenu})
          ON CONFLICT (id) DO NOTHING;
        `,
      ),
    );
  
    return insertedMenus;
  }

  async function seedTransaksiPenjualans() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  
    await client.sql`
      CREATE TABLE IF NOT EXISTS transaksiPenjualans (
        idTransaksi UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        idPelanggan UUID NOT NULLL,
        idUser UUID NOT NULL
      );
    `;
  
    const insertedTransaksiPenjualans = await Promise.all(
      transaksiPenjualans.map(
        (transaksiPenjualan) => client.sql`
          INSERT INTO transaksiPenjualans (idTransaksi, idPelanggan, idUser, gambarMenu)
          VALUES (${transaksiPenjualan.idTransaksi}, ${transaksiPenjualan.idPelanggan}, ${transaksiPenjualan.idUser})
          ON CONFLICT (id) DO NOTHING;
        `,
      ),
    );
  
    return insertedTransaksiPenjualans;
  }

  async function seedMDetailTransaksiPenjualans() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  
    await client.sql`
      CREATE TABLE IF NOT EXISTS detailTransaksiPenjualans (
        idDetailTransaksi UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        idTransaksi VARCHAR(255) NOT NULL,
        idMenu UUID NOT NULL,
        idPelanggan UUID NOT NULL,
        idUser UUID NOT NULL,
        jumlahMenu INTEGER NOT NULL,
        totalHarga INTEGER NOT NULL,
        tanggalTransaksi VARCHAR(255) NOT NULL
      );
    `;
  
    const insertedDetailTransaksiPenjualans = await Promise.all(
      detailTransaksiPenjualans.map(
        (detailTransaksiPenjualan) => client.sql`
          INSERT INTO detailTransaksiPenjualans (idDetailTransaksi, idTransaksi, idMenu, idPelanggan, idUser, jumlahMenu, totalHarga, tanggalTransaksi)
          VALUES (${detailTransaksiPenjualan.idDetailTransaksi}, ${detailTransaksiPenjualan.idTransaksi}, ${detailTransaksiPenjualan.idMenu}, ${detailTransaksiPenjualan.idPelanggan}, ${detailTransaksiPenjualan.idPelanggan}, ${detailTransaksiPenjualan.jumlahMenu}, ${detailTransaksiPenjualan.totalHarga}, ${detailTransaksiPenjualan.tanggalTransaksi})
          ON CONFLICT (id) DO NOTHING;
        `,
      ),
    );
  
    return insertedDetailTransaksiPenjualans;
  }

  async function seedMembers() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  
    await client.sql`
      CREATE TABLE IF NOT EXISTS members (
        idMember UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        namaMember VARCHAR(255) NOT NULL,
        diskonMember INTEGER NOT NULL,
        batasAtasMember INTEGER NOT NULL,
        batasBawahMember INTEGER NOT NULL
      );
    `;
  
    const insertedMembers = await Promise.all(
      members.map(
        (member) => client.sql`
          INSERT INTO member (idMember, namaMember, diskonMember, batasAtasMember, batasBawahMember)
          VALUES (${member.idMember}, ${member.namaMember}, ${member.diskonMember}, ${member.batasAtasMember}, ${member.batasBawahMember})
          ON CONFLICT (id) DO NOTHING;
        `,
      ),
    );
  
    return insertedMembers;
  }

  async function seedPelanggans() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  
    await client.sql`
      CREATE TABLE IF NOT EXISTS pelanggans (
        idPelanggan UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        namaPelanggan VARCHAR(255) NOT NULL,
        noWA INTEGER NOT NULL,
        progressTransaksi INTEGER NOT NULL,
        idMember UUID NOT NULL,
        idTransaksi UUID NOT NULL
      );
    `;
  
    const insertedPelanggans = await Promise.all(
      pelanggans.map(
        (pelanggan) => client.sql`
          INSERT INTO pelanggans (idPelanggan, namaPelanggan, noWA, progressTransaksi, idMember, idTransaksi)
          VALUES (${pelanggan.idPelanggan}, ${pelanggan.namaPelanggan}, ${pelanggan.noWA}, ${pelanggan.progressTransaksi}, ${pelanggan.idMember}, ${pelanggan.idTransaksi})
          ON CONFLICT (id) DO NOTHING;
        `,
      ),
    );
  
    return insertedPelanggans;
  }

  async function seedBahanBakus() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
      CREATE TABLE IF NOT EXISTS bahanBakus (
        idBahanBaku UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        namaBahanBaku VARCHAR(255) NOT NULL,
        hargaBahanBaku INTEGER NOT NULL,
        gambarBahanBaku VARCHAR(255) NOT NULL,
        jumlahBahanBaku INTEGER NOT NULL
      );
    `;
  
    const insertedBahanBakus = await Promise.all(
      bahanBakus.map(
        (bahanBaku) => client.sql`
          INSERT INTO bahanBakus (idBahanBaku, namaBahanBaku, hargaBahanBaku, gambarBahanBaku, jumlahBahanBaku)
          VALUES (${bahanBaku.idBahanBaku}, ${bahanBaku.namaBahanBaku}, ${bahanBaku.hargaBahanBaku}, ${bahanBaku.gambarBahanBaku}, ${bahanBaku.jumlahBahanBaku})
          ON CONFLICT (idBahanBaku) DO NOTHING;
        `
      )
    );
  
    return insertedBahanBakus;
  }

  async function seedTransaksiPembelians() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  
    await client.sql`
      CREATE TABLE IF NOT EXISTS transaksiPembelians (
        idTransaksiBeli UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        idUser UUID NOT NULLL,
        idBahanBaku UUID NOT NULL
      );
    `;
  
    const insertedTransaksiPembelians = await Promise.all(
      transaksiPembelians.map(
        (transaksiPembelian) => client.sql`
          INSERT INTO transaksiPembelians (idTransaksiBeli, idUser, idBahanBaku)
          VALUES (${transaksiPembelian.idTransaksiBeli}, ${transaksiPembelian.idUser}, ${transaksiPembelian.idBahanBaku})
          ON CONFLICT (id) DO NOTHING;
        `,
      ),
    );
  
    return insertedTransaksiPembelians;
  }

  async function seedMDetailTransaksiPembelians() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  
    await client.sql`
      CREATE TABLE IF NOT EXISTS detailTransaksiPembelians (
        idDetailPembelian UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        idTransaksiBeli VARCHAR(255) NOT NULL,
        idBahanBaku UUID NOT NULL,
        idPelanggan UUID NOT NULL,
        namaUser string,
        jumlahBahanBaku INTEGER NOT NULL,
        totalHarga INTEGER NOT NULL,
        tanggalTransaksi VARCHAR(255) NOT NULL
      );
    `;
  
    const insertedDetailTransaksiPembelians = await Promise.all(
      detailTransaksiPembelians.map(
        (detailTransaksiPembelian) => client.sql`
          INSERT INTO detailTransaksiPembelians (idDetailPembelian, idTransaksiBeli, idBahanBaku, idPelanggan, idUser, jumlahBahanBaku, totalHarga, tanggalTransaksi)
          VALUES (${detailTransaksiPembelian.idDetailPembelian}, ${detailTransaksiPembelian.idTransaksiBeli}, ${detailTransaksiPembelian.idBahanBaku}, ${detailTransaksiPembelian.namaUser}, ${detailTransaksiPembelian.jumlahBahanBaku}, ${detailTransaksiPembelian.totalHarga}, ${detailTransaksiPembelian.tanggalTransaksi})
          ON CONFLICT (id) DO NOTHING;
        `,
      ),
    );
  
    return insertedDetailTransaksiPembelians;
  }

  async function seedRevenue() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS revenue (
      month VARCHAR(4) NOT NULL UNIQUE,
      revenue INT NOT NULL
    );
  `;

  const insertedRevenue = await Promise.all(
    revenue.map(
      (rev) => client.sql`
        INSERT INTO revenue (month, revenue)
        VALUES (${rev.month}, ${rev.revenue})
        ON CONFLICT (month) DO NOTHING;
      `,
    ),
  );

  return insertedRevenue;
}

export async function GET() {
  // return Response.json({
  //   message:
  //     'Uncomment this file and remove this line. You can delete this file when you are finished.',
  // });
  try {
    await client.sql`BEGIN`;
    await seedUsers();
    await seedRoles();
    await seedMenus();
    await seedMembers();
    await seedPelanggans();
    await seedBahanBakus();
    await seedTransaksiPembelians();
    await seedTransaksiPenjualans();
    await seedMDetailTransaksiPembelians();
    await seedMDetailTransaksiPenjualans();
    await seedRevenue();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}