import { useEffect, useRef, useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { IoCaretUpCircle } from "react-icons/io5";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { getGoogleVoices, googletextTobSpeech } from "../helper";
import { text } from "../component/main/text";
import "./style.css";
import { getChapters, getEpilogues, getPlot, getPlots } from "./book/helper";
import { useDispatch } from "react-redux";
import { setLoading } from "../feature/loader/loader";

const Book = () => {
    const [audioSrc, setAudioSrc] = useState("");
    const [currentChapter, setCurrentChapter] = useState(null);
    const [currentEpilogue, setCurrentEpilogue] = useState(null);
    const [currentPlot, setCurrentPlot] = useState(null);
    const [epilogues, setEpilogues] = useState([]);
    const [plots, setPlots] = useState([]);
    const [chapters, setChapters] = useState([]);

    const [voices, setVoices] = useState([]);
    const [currentLine, setCurrentLine] = useState(0);
    const lines = text.split(". ");
    const ref = useRef(null);
    const [selectedChapter, setSelectedChapter] = useState(null);
    const [selectedEpilogue, setSelectedEpilogue] = useState(null);

    const dispatch = useDispatch();

    const getVoices = async () => {
        const googleVoices = await getGoogleVoices();
        setVoices(googleVoices);
    };
    const getTextToSpeech = async (line) => {
        const as = await googletextTobSpeech(line);
        setAudioSrc(as);
    };
    //for loading the book
    const getBook = async () => {
        dispatch(setLoading(true));
        try {
            const chapters = await getChapters();
            setChapters(chapters);
            const chapterName = chapters[0].chapterName;
            const epilogues = await getEpilogues(chapterName);
            setEpilogues(epilogues);
            const plots = await getPlots(chapterName);
            setPlots(plots);
            setCurrentChapter(chapters[0]);
            setCurrentEpilogue(epilogues[0]);
            setCurrentPlot(plots[0]);
            const plot = plots[0];
            const cPlot = await getPlot(chapterName, plot.sceneNumber);
            setCurrentPlot(cPlot);
        } catch (error) {
            dispatch(setLoading(false));
        }
    };

    useEffect(() => {
        getVoices();
        getTextToSpeech(lines[currentLine]);
    }, []);

    useEffect(() => {
        if (currentLine && currentLine < lines.length) {
            setAudioSrc("");
            getTextToSpeech(lines[currentLine]);
        }
    }, [currentLine]);
    const handleChapterClick = (chapter) => {
        setSelectedChapter(chapter);
    };
    const handleEpilogueClick = (epilogue) => {
        setSelectedEpilogue(epilogue);
    };
    return (
        <>
            {audioSrc && (
                <audio
                    controls
                    autoPlay
                    style={{ display: "none" }}
                    ref={ref}
                    onEnded={() => setCurrentLine(currentLine + 1)}
                >
                    <source src={audioSrc} type="audio/mp3" />
                    Your browser does not support the audio element.
                </audio>
            )}

            <section className="mid-section">
                <p
                    style={{
                        fontSize: "var(--regular-text)",
                        color: "#F4F4F4",
                        marginBottom: "50%",
                    }}
                >
                    {/* {text} */}
                    {lines.map((line, index) => (
                        <span
                            key={index}
                            style={{
                                backgroundColor:
                                    index === currentLine
                                        ? "#708090"
                                        : "transparent",
                            }}
                        >
                            {line}
                            {". "}
                        </span>
                    ))}
                </p>
                <div className="filters">
                    <Menu>
                        <MenuButton
                            as={Button}
                            rightIcon={
                                <IoCaretUpCircle
                                    color="#737373"
                                    fontSize={"16px"}
                                />
                            }
                            h={"28px"}
                            fontSize={"12px"}
                            backgroundColor={"#292929"}
                            width={"30%"}
                            color={"#F4F4F4"}
                            padding={"4px"}
                            _hover={{ backgroundColor: "#292929" }}
                            _active={{ backgroundColor: "#292929" }}
                            fontWeight={"400"}
                        >
                            {selectedChapter || "chapters"}
                        </MenuButton>
                        <MenuList
                            style={{
                                backgroundColor: "black",
                                color: "#D9D9D9",
                            }}
                        >
                            {[1, 2, 3, 4, 5].map((chapter, index) => (
                                <MenuItem
                                    key={index}
                                    style={{ backgroundColor: "black" }}
                                    onClick={() =>
                                        handleChapterClick(`chapter${chapter}`)
                                    }
                                >
                                    {`chapter${chapter}`}
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Menu>
                    <div style={{ fontSize: "12px", color: "#F4F4F4" }}>
                        Plot 390
                    </div>
                    <Menu>
                        <MenuButton
                            as={Button}
                            rightIcon={
                                <TbTriangleInvertedFilled color="#C7C7C7" />
                            }
                            h={"28px"}
                            fontSize={"12px"}
                            backgroundColor={"black"}
                            color={"#C7C7C7"}
                            _hover={{ backgroundColor: "#292929" }}
                            _active={{ backgroundColor: "#292929" }}
                            fontWeight={"400"}
                        >
                            {selectedEpilogue || "Epilogue"}
                        </MenuButton>
                        <MenuList
                            style={{
                                backgroundColor: "black",
                                color: "#C7C7C7",
                            }}
                        >
                            {[1, 2, 3, 4, 5].map((epilogue, index) => (
                                <MenuItem
                                    key={index}
                                    style={{ backgroundColor: "black" }}
                                    onClick={() =>
                                        handleEpilogueClick(
                                            `epilogue${epilogue}`
                                        )
                                    }
                                >
                                    {`epilogue${epilogue}`}
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Menu>
                </div>
            </section>
        </>
    );
};

export default Book;
