using System;
using System.ComponentModel.DataAnnotations;

namespace ToDoApi.Dtos.Item
{
    public record ItemDto
    {
        public Guid Id { get; init; }

        public string? Title { get; init; }
        public string? Description { get; init; }

        public bool IsComplete { get; init; }

        public DateTimeOffset CompleteUntil { get; init; }
        public DateTimeOffset CreatedAt { get; init; }
    }
}