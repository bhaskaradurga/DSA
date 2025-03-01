# DSA
Python Functions, Complexities, and Underlying Data Structures
**1. Lists (list) – Dynamic Array (Resizable Array)
Underlying Data Structure: Dynamic Array (Contiguous Block of Memory)
Uses: Ordered collection of items, allows duplicates, supports indexing.
Operation	Function	Time Complexity	Data Structure Used
Append	list.append(x)	O(1) (Amortized)	Dynamic Array
Insert	list.insert(i, x)	O(n)	Dynamic Array
Delete (by index)	del list[i]	O(n)	Dynamic Array
Remove (by value)	list.remove(x)	O(n)	Dynamic Array
Pop (last)	list.pop()	O(1)	Dynamic Array
Pop (any index)	list.pop(i)	O(n)	Dynamic Array
Index lookup	list[i]	O(1)	Dynamic Array
Find element	list.index(x)	O(n)	Dynamic Array
Check existence	x in list	O(n)	Dynamic Array
Sort	list.sort()	O(n log n)	Timsort (Hybrid of Merge & Insertion Sort)
Reverse	list.reverse()	O(n)	Dynamic Array
2. Strings (str) – Immutable Sequence
Underlying Data Structure: Immutable Array (Fixed-Length Sequence)
Uses: Text representation, immutable (cannot be changed after creation).
Operation	Function	Time Complexity	Data Structure Used
Get Length	len(s)	O(1)	Immutable Array
Access Char	s[i]	O(1)	Immutable Array
Concatenation	s1 + s2	O(n)	Immutable Array
Slicing	s[a:b]	O(b-a)	Immutable Array
Find Substring	s.find(x)	O(n)	Immutable Array
Replace	s.replace(a, b)	O(n)	Immutable Array
Split	s.split(delim)	O(n)	Immutable Array
Join	delim.join(list)	O(n)	Immutable Array
Reverse	s[::-1]	O(n)	Immutable Array
3. Sets (set) – Hash Table-Based Unordered Collection
Underlying Data Structure: Hash Table with Open Addressing
Uses: Unordered collection, unique elements, fast lookups.
Operation	Function	Time Complexity	Data Structure Used
Insert	set.add(x)	O(1)	Hash Table
Delete	set.remove(x) / set.discard(x)	O(1)	Hash Table
Check Existence	x in set	O(1)	Hash Table
Union	`s1	s2`	O(len(s1) + len(s2))
Intersection	s1 & s2	O(min(len(s1), len(s2)))	Hash Table
Difference	s1 - s2	O(len(s1))	Hash Table
4. Dictionaries (dict) – Hash Table-Based Key-Value Store
Underlying Data Structure: Hash Table with Open Addressing
Uses: Key-value mapping, fast lookups, insertions, deletions.
Operation	Function	Time Complexity	Data Structure Used
Insert	dict[key] = value	O(1)	Hash Table
Delete	del dict[key]	O(1)	Hash Table
Lookup	dict[key]	O(1)	Hash Table
Get Keys	dict.keys()	O(n)	Hash Table
Get Values	dict.values()	O(n)	Hash Table
Get Items	dict.items()	O(n)	Hash Table
5. Stacks (LIFO) – list
Underlying Data Structure: Dynamic Array (List)
Uses: Last-In-First-Out (LIFO) structure.
Operation	Function	Time Complexity	Data Structure Used
Push	stack.append(x)	O(1)	Dynamic Array
Pop	stack.pop()	O(1)	Dynamic Array
Peek	stack[-1]	O(1)	Dynamic Array
6. Queues (FIFO) – collections.deque
Underlying Data Structure: Doubly Linked List
Uses: First-In-First-Out (FIFO) structure, fast insertions and deletions.
Operation	Function	Time Complexity	Data Structure Used
Enqueue	queue.append(x)	O(1)	Doubly Linked List
Dequeue	queue.popleft()	O(1)	Doubly Linked List
Peek Front	queue[0]	O(1)	Doubly Linked List
7. Priority Queue (Min-Heap) – heapq
Underlying Data Structure: Binary Heap (Min-Heap by default)
Uses: Maintains elements in priority order.
Operation	Function	Time Complexity	Data Structure Used
Insert	heapq.heappush(h, x)	O(log n)	Binary Heap
Get Min	heapq.heappop(h)	O(log n)	Binary Heap
Peek Min	h[0]	O(1)	Binary Heap
Summary of Complexities and Data Structures
Data Structure	Insert	Delete	Search	Access	Sorting	Underlying Structure
List (Array)	O(1) (End) / O(n) (Middle)	O(n)	O(n)	O(1)	O(n log n)	Dynamic Array
String (Immutable)	O(n)	O(n)	O(n)	O(1)	O(n log n)	Immutable Array
Set (Hash Table)	O(1)	O(1)	O(1)	N/A	O(n log n)	Hash Table
Dictionary (Hash Table)	O(1)	O(1)	O(1)	O(1)	O(n log n) (sorting keys)	Hash Table
Stack (LIFO)	O(1)	O(1)	O(n)	O(1)	N/A	Dynamic Array
Queue (FIFO)	O(1)	O(1)	O(n)	O(1)	N/A	Doubly Linked List
Priority Queue (Heap)	O(log n)	O(log n)	O(n)	O(1)	O(n log n)	Binary Heap
This note provides a quick reference to Python functions, their complexities, and the underlying data structures used. Let me know if you need more details! 🚀
