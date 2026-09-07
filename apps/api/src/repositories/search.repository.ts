import { prisma } from '../lib/prisma';

export class SearchRepository {
  async logSearch(userId: string, query: string) {
    return await prisma.searchHistory.create({
      data: { userId, query },
    });
  }

  async getHistoryByUserId(userId: string) {
    return await prisma.searchHistory.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }
}
