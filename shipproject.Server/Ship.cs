namespace shipproject.Server
{
    public class Ship
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public int Length { get; set; }
        public int Width { get; set; }
        public string Code { get; set; }
        public override string ToString()
        {
            return $"{Id},{Name},{Length},{Width},{Code}";
        }
    }

}
