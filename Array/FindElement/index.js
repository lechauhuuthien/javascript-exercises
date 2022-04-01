/**
 * Cho một mảng (array) như sau:
 * const cfdLocation = [
 *  {
 *      id: 1,
 *      name: "Cơ sở 1",
 *      address: "Số 11, Phan Kế Bính, Quận 1, TP. Hồ Chí Minh",
 *      teacher: "Trần Nghĩa",
 *      isOpening: true,
 *  },
 *  {
 *      id: 2,
 *      name: "Cơ sở 2",
 *      address: "Lầu 2, 666/46/29, Phường 14, Quận 10, TPHCM",
 *      teacher: "Vương Đặng",
 *      isOpening: false,
 *  },
 * ]
 * 
 * Hãy viết javascript function giúp tìm ra thông tin location theo yêu cầu:
 * 1. Location có id = 1
 * 2. Location có name = "Cơ sở 2"
 * 3. Location có người dạy là "Trần Nghĩa"
 * 4. Location có địa chỉ tại "Quận 10"
 * 5. Location hiện tại đang mở cửa
 */

const cfdLocation = [
    {
        id: 1,
        name: "Cơ sở 1",
        address: "Số 11, Phan Kế Bính, Quận 1, TP. Hồ Chí Minh",
        teacher: "Trần Nghĩa",
        isOpening: true,
    },
    {
        id: 2,
        name: "Cơ sở 2",
        address: "Lầu 2, 666/46/29, Phường 14, Quận 10, TPHCM",
        teacher: "Vương Đặng",
        isOpening: false,
    },
]

const location1 = cfdLocation.find((location) => location?.id === 1);
const location2 = cfdLocation.find((location) => location?.name?.includes("Cơ sở 2"));
const location3 = cfdLocation.find((location) => location?.id?.teacher.includes("Trần Nghĩa"));
const location4 = cfdLocation.find((location) => location?.address?.includes("Quận 10"));
const location5 = cfdLocation.find((location) => location.isOpening);
