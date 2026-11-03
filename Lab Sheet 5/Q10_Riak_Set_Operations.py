# Q10. Set operations in a Riak-based application (Python demonstration)
# This program demonstrates set logic in application memory.
# Riak KV itself stores values; application code performs these set operations.

users_a = {"Aarav", "Riya", "Karan"}
users_b = {"Riya", "Neha", "Aarav"}

# Add element
users_a.add("Neha")
print("After adding Neha:", users_a)

# Remove element
users_a.discard("Karan")
print("After removing Karan:", users_a)

# Membership check
print("Is Riya present?", "Riya" in users_a)

# Common elements
print("Common users:", users_a.intersection(users_b))
