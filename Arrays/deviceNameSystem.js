function deviceNamesSystem(devicenames) {
  // Write your code here
  const map = new Map();
  const uniqueDevices = [];

  for (let device of devicenames) {
    if (map.has(device)) {
      uniqueDevices.push(device + map.get(device));
      map.set(device, map.get(device) + 1);
    } else {
      uniqueDevices.push(device);
      map.set(device, 1);
    }
  }

  return uniqueDevices;
}


/*
 * Complete the 'mergeInBetween' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST list1
 *  2. INTEGER_SINGLY_LINKED_LIST list2
 *  3. INTEGER a
 *  4. INTEGER b
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function mergeInBetween(list1, list2, a, b) {
    // Write your code here

}