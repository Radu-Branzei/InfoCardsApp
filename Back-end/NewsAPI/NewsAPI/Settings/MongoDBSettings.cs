namespace NewsAPI.Settings
{
    public class MongoDBSettings : IMongoDBSettings
    {
        public string AnnouncementsCollectionName { get; set; } = "Announcements";
        public string ConnectionString { get; set; } = "mongodb://localhost:27017/announcement";
        public string DatabaseName { get; set; } = "announcement";
    }
}
